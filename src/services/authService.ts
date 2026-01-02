import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// Define interfaces for authentication-related data
export interface UserCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends UserCredentials {
  username: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
}

export interface DecodedToken {
  userId: string;
  email: string;
  exp: number;
}

class AuthService {
  private BASE_URL = '/api/auth'; // Adjust this to your backend API endpoint

  // User Registration
  async register(userData: RegisterData): Promise<AuthResponse> {
    try {
      const response = await axios.post(`${this.BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      this.handleAuthError(error);
    }
  }

  // User Login
  async login(credentials: UserCredentials): Promise<AuthResponse> {
    try {
      const response = await axios.post(`${this.BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      this.handleAuthError(error);
    }
  }

  // Logout
  logout(): void {
    localStorage.removeItem('token');
    // Optional: Call backend logout endpoint if needed
  }

  // Token Management
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Token Validation
  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const decodedToken = this.decodeToken(token);
      return decodedToken.exp > Date.now() / 1000;
    } catch {
      return false;
    }
  }

  // Decode JWT Token
  decodeToken(token: string): DecodedToken {
    try {
      return jwtDecode<DecodedToken>(token);
    } catch {
      throw new Error('Invalid token');
    }
  }

  // Get Current User
  getCurrentUser(): { id: string; email: string } | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const decoded = this.decodeToken(token);
      return {
        id: decoded.userId,
        email: decoded.email
      };
    } catch {
      return null;
    }
  }

  // Error Handling
  private handleAuthError(error: any): never {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || 'Authentication failed';
      throw new Error(message);
    }
    throw error;
  }

  // Axios Interceptor for adding token to requests
  setupInterceptors() {
    axios.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
}

export default new AuthService();
