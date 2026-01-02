import axios from 'axios';
import { generateToken } from '../utils/tokenUtils';

const API_URL = 'https://your-backend-api.com/auth'; // Replace with your actual backend URL

export interface User {
  id?: string;
  username: string;
  password: string;
  email?: string;
}

export const authService = {
  async login(username: string, password: string) {
    try {
      const response = await axios.post(, { username, password });
      
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
      }
      
      return response.data;
    } catch (error) {
      console.error('Login error', error);
      throw error;
    }
  },

  async register(user: User) {
    try {
      const response = await axios.post(, user);
      return response.data;
    } catch (error) {
      console.error('Registration error', error);
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Mock token generation for frontend demonstration
  generateMockToken(user: User) {
    return generateToken({ 
      id: user.id, 
      username: user.username, 
      email: user.email 
    });
  }
};
