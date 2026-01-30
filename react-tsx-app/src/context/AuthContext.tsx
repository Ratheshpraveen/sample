import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: string;
  email: string;
  name?: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  updateUser: (user: User) => void;
}

interface DecodedToken {
  exp: number;
  [key: string]: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isTokenValid = (token: string): boolean => {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  };

  const extractUserFromToken = (token: string): User | null => {
    try {
      const decoded = jwtDecode<any>(token);
      return {
        id: decoded.sub || decoded.userId || decoded.id,
        email: decoded.email,
        name: decoded.name,
        ...decoded
      };
    } catch (error) {
      console.error('Error extracting user from token:', error);
      return null;
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    
    if (storedToken && isTokenValid(storedToken)) {
      setToken(storedToken);
      const userData = extractUserFromToken(storedToken);
      setUser(userData);
    } else {
      localStorage.removeItem('authToken');
    }
    
    setIsLoading(false);
  }, []);

  const login = (newToken: string) => {
    if (!isTokenValid(newToken)) {
      throw new Error('Invalid or expired token');
    }

    localStorage.setItem('authToken', newToken);
    setToken(newToken);
    
    const userData = extractUserFromToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setUser(null);
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    isLoading,
    login,
    logout,
    updateUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
