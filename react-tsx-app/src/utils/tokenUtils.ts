import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // Replace with a secure secret key

export const generateToken = (payload: any, expiresIn: string = '1h') => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
};

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};

export const isTokenExpired = (token: string) => {
  const decodedToken = decodeToken(token) as { exp?: number };
  if (!decodedToken || !decodedToken.exp) return true;
  
  return Date.now() >= decodedToken.exp * 1000;
};
