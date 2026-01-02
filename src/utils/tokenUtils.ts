import jwt_decode from 'jwt-decode';

// Interface for decoded token payload
export interface TokenPayload {
  userId: string;
  email: string;
  exp: number;
  iat: number;
}

/**
 * Decode a JWT token
 * @param token JWT token string
 * @returns Decoded token payload
 */
export const decodeToken = (token: string): TokenPayload | null => {
  try {
    return jwt_decode<TokenPayload>(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

/**
 * Check if a token is expired
 * @param token JWT token string
 * @returns Boolean indicating if token is expired
 */
export const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken = decodeToken(token);
    if (!decodedToken) return true;

    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error('Error checking token expiration:', error);
    return true;
  }
};

/**
 * Generate a refresh token
 * @returns A new refresh token string
 */
export const generateRefreshToken = (): string => {
  // In a real-world scenario, this would typically be handled by the backend
  // Here we're generating a simple random token
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

/**
 * Securely store a token in localStorage
 * @param key Storage key for the token
 * @param token Token to store
 */
export const storeToken = (key: string, token: string): void => {
  try {
    // In a production app, consider using more secure storage methods
    localStorage.setItem(key, token);
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

/**
 * Retrieve a token from localStorage
 * @param key Storage key for the token
 * @returns Retrieved token or null
 */
export const retrieveToken = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

/**
 * Remove a token from localStorage
 * @param key Storage key for the token
 */
export const removeToken = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing token:', error);
  }
};
