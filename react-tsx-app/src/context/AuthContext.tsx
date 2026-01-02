import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User, authService } from '../services/authService';
import { verifyToken } from '../utils/tokenUtils';

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (user: User) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(authService.getCurrentUser());
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const login = async (username: string, password: string) => {
    try {
      const data = await authService.login(username, password);
      setUser(data.user);
      setToken(data.token);
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const register = async (userData: User) => {
    try {
      await authService.register(userData);
    } catch (error) {
      console.error('Registration failed', error);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setToken(null);
  };

  const isAuthenticated = () => {
    return !!token && verifyToken(token) !== null;
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
