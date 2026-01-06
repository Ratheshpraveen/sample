import React, { createContext, useState, useContext, ReactNode } from 'react';
import { login, logout, isAuthenticated, getToken } from '../services/authService';
import { setupCSRFInterceptor, clearCSRFToken } from '../utils/csrfProtection';

interface AuthContextType {
  isAuthenticated: boolean;
  loginUser: (email: string, password: string) => Promise<boolean>;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(isAuthenticated());

  // Setup CSRF protection when context is first created
  React.useEffect(() => {
    setupCSRFInterceptor();
  }, []);

  const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const success = await login({ email, password });
      setIsUserAuthenticated(success);
      return success;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  };

  const logoutUser = () => {
    logout();
    clearCSRFToken();
    setIsUserAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: isUserAuthenticated,
      loginUser,
      logoutUser
    }}>
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
