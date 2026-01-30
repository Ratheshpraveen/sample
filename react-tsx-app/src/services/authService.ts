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

class AuthService {
  private api: AxiosInstance;
  private readonly TOKEN_KEY = 'authToken';
  private readonly REFRESH_TOKEN_KEY = 'refreshToken';

  constructor(baseURL: string = import.meta.env.VITE_API_URL || 'http://localhost:3000/api') {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
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

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const newToken = await this.refreshAccessToken();
            if (newToken && originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              return this.api(originalRequest);
            }
          } catch (refreshError) {
            this.clearTokens();
            window.location.href = '/login';
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
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Login failed');
      }
      throw new Error('An unexpected error occurred during login');
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
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Registration failed');
      }
      throw new Error('An unexpected error occurred during registration');
    }
  }

  async refreshAccessToken(): Promise<string | null> {
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
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
      console.error('Token refresh failed:', error);
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
      console.error('Server logout failed:', error);
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
      console.error('Error validating token:', error);
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
      console.error('Error decoding token:', error);
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
export type { LoginCredentials, LoginResponse, RefreshTokenResponse };
