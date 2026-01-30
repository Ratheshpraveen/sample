import axios, { AxiosInstance, AxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  refreshToken?: string;
  user?: any;
}

interface RefreshTokenResponse {
  token: string;
  refreshToken?: string;
}

interface DecodedToken {
  exp: number;
  [key: string]: any;
}

interface AuthError {
  message: string;
  code?: string;
  statusCode?: number;
}

class AuthService {
  private api: AxiosInstance;
  private readonly TOKEN_KEY = 'authToken';
  private readonly REFRESH_TOKEN_KEY = 'refreshToken';
  private isRefreshing = false;
  private refreshSubscribers: Array<(token: string) => void> = [];

  constructor(baseURL: string = import.meta.env.VITE_API_URL || 'http://localhost:3000/api') {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private subscribeTokenRefresh(callback: (token: string) => void): void {
    this.refreshSubscribers.push(callback);
  }

  private onTokenRefreshed(token: string): void {
    this.refreshSubscribers.forEach((callback) => callback(token));
    this.refreshSubscribers = [];
  }

  private handleAuthError(error: any): AuthError {
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
    return { message, code: error.code, statusCode: error.response?.status };
  }

  private setupInterceptors(): void {
    this.api.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.api.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as any;

        if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== '/auth/refresh') {
          originalRequest._retry = true;

          if (this.isRefreshing) {
            return new Promise((resolve) => {
              this.subscribeTokenRefresh((token: string) => {
                if (originalRequest.headers) {
                  originalRequest.headers.Authorization = `Bearer ${token}`;
                }
                resolve(this.api(originalRequest));
              });
            });
          }

          this.isRefreshing = true;

          try {
            const newToken = await this.refreshAccessToken();
            
            if (newToken) {
              this.isRefreshing = false;
              this.onTokenRefreshed(newToken);
              
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
              }
              return this.api(originalRequest);
            }
          } catch (refreshError) {
            this.isRefreshing = false;
            this.clearTokens();
            if (typeof window !== 'undefined') {
              window.location.href = '/login';
            }
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await this.api.post<LoginResponse>('/auth/login', credentials);
      const { token, refreshToken, user } = response.data;

      if (token) {
        this.setToken(token);
      }

      if (refreshToken) {
        this.setRefreshToken(refreshToken);
      }

      return response.data;
    } catch (error) {
      const authError = this.handleAuthError(error);
      
      if (authError.statusCode === 401) {
        throw new Error('Invalid email or password');
      } else if (authError.statusCode === 429) {
        throw new Error('Too many login attempts. Please try again later');
      } else {
        throw new Error(authError.message || 'Login failed');
      }
    }
  }

  async register(userData: { email: string; password: string; name?: string }): Promise<LoginResponse> {
    try {
      const response = await this.api.post<LoginResponse>('/auth/register', userData);
      const { token, refreshToken } = response.data;

      if (token) {
        this.setToken(token);
      }

      if (refreshToken) {
        this.setRefreshToken(refreshToken);
      }

      return response.data;
    } catch (error) {
      const authError = this.handleAuthError(error);
      
      if (authError.statusCode === 409) {
        throw new Error('User already exists with this email');
      } else {
        throw new Error(authError.message || 'Registration failed');
      }
    }
  }

  async refreshAccessToken(): Promise<string | null> {
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
      console.warn('No refresh token available');
      return null;
    }

    if (!this.isTokenValid(refreshToken)) {
      console.warn('Refresh token is expired');
      return null;
    }

    try {
      const response = await this.api.post<RefreshTokenResponse>('/auth/refresh', {
        refreshToken,
      });

      const { token, refreshToken: newRefreshToken } = response.data;

      if (token) {
        this.setToken(token);
      }

      if (newRefreshToken) {
        this.setRefreshToken(newRefreshToken);
      }

      return token;
    } catch (error) {
      const authError = this.handleAuthError(error);
      console.error('Token refresh failed:', authError.message);
      
      this.clearTokens();
      
      return null;
    }
  }

  logout(): void {
    this.clearTokens();
  }

  async logoutFromServer(): Promise<void> {
    try {
      await this.api.post('/auth/logout');
    } catch (error) {
      const authError = this.handleAuthError(error);
      console.error('Server logout failed:', authError.message);
    } finally {
      this.clearTokens();
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token);
  }

  clearTokens(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
  }

  isTokenValid(token?: string): boolean {
    const tokenToCheck = token || this.getToken();

    if (!tokenToCheck) {
      return false;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(tokenToCheck);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    } catch (error) {
      console.warn('Token validation failed - token may be malformed');
      return false;
    }
  }

  isAuthenticated(): boolean {
    return this.isTokenValid();
  }

  getDecodedToken(): any {
    const token = this.getToken();

    if (!token) {
      return null;
    }

    try {
      return jwtDecode(token);
    } catch (error) {
      console.warn('Failed to decode token');
      return null;
    }
  }

  getUserFromToken(): any {
    const decoded = this.getDecodedToken();

    if (!decoded) {
      return null;
    }

    return {
      id: decoded.sub || decoded.userId || decoded.id,
      email: decoded.email,
      name: decoded.name,
      ...decoded,
    };
  }

  getApiInstance(): AxiosInstance {
    return this.api;
  }
}

const authService = new AuthService();

export default authService;
export { AuthService };
export type { LoginCredentials, LoginResponse, RefreshTokenResponse, AuthError };

