import React, { createContext, useState, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

// Define types for authentication context
interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  refreshToken: () => Promise<string | null>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Create AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Check if token exists and is valid on initial load
  React.useEffect(() => {
    const storedToken = Cookies.get('authToken');
    if (storedToken) {
      try {
        const decodedUser = jwtDecode<User>(storedToken);
        setUser(decodedUser);
        setToken(storedToken);
      } catch (error) {
        // Invalid token, clear it
        logout();
      }
    }
  }, []);

  const login = (newToken: string) => {
    try {
      // Decode token and extract user info
      const decodedUser = jwtDecode<User>(newToken);
      
      // Store token in HttpOnly cookie
      Cookies.set('authToken', newToken, { 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'strict' 
      });

      setUser(decodedUser);
      setToken(newToken);
    } catch (error) {
      console.error('Invalid token', error);
      logout();
    }
  };

  const logout = () => {
    // Remove token from cookies
    Cookies.remove('authToken');
    setUser(null);
    setToken(null);
  };

  const refreshToken = async (): Promise<string | null> => {
    try {
      // TODO: Implement actual token refresh logic with your backend
      // This is a placeholder - replace with actual API call to refresh token
      const response = await fetch('/api/refresh-token', {
        method: 'POST',
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const { token: newToken } = await response.json();
      
      if (newToken) {
        login(newToken);
        return newToken;
      }
      
      return null;
    } catch (error) {
      console.error('Token refresh error', error);
      logout();
      return null;
    }
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    login,
    logout,
    refreshToken
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
