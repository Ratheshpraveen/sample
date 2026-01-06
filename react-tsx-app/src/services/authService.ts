import axios from 'axios';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

interface LoginCredentials {
  email: string;
  password: string;
}

interface TokenPayload {
  exp: number;
  // Add other token payload fields as needed
}

// Secure token storage using HttpOnly cookies simulation
export const storeToken = (token: string, isRefreshToken = false) => {
  const key = isRefreshToken ? REFRESH_TOKEN_KEY : TOKEN_KEY;
  
  // In a real-world scenario, tokens would be stored in HttpOnly cookies
  // Here we're simulating that with localStorage for demonstration
  localStorage.setItem(key, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwt_decode<TokenPayload>(token);
    return decoded.exp < Date.now() / 1000;
  } catch {
    return true;
  }
};

export const login = async (credentials: LoginCredentials): Promise<boolean> => {
  try {
    const response = await axios.post('/api/login', credentials);
    
    if (response.data.accessToken) {
      storeToken(response.data.accessToken);
    }
    
    if (response.data.refreshToken) {
      storeToken(response.data.refreshToken, true);
    }
    
    return true;
  } catch (error) {
    console.error('Login failed', error);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export const refreshToken = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken();
  
  if (!refreshToken) return null;
  
  try {
    const response = await axios.post('/api/refresh-token', { refreshToken });
    
    if (response.data.accessToken) {
      storeToken(response.data.accessToken);
      return response.data.accessToken;
    }
    
    return null;
  } catch {
    logout();
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  return !!token && !isTokenExpired(token);
};

// Axios interceptor for automatic token refresh
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // If the error is due to an expired token and we haven't already tried to refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      const newToken = await refreshToken();
      
      if (newToken) {
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return axios(originalRequest);
      }
    }
    
    return Promise.reject(error);
  }
);
