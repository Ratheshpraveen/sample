import axios from 'axios';

// Generate a CSRF token
export const generateCSRFToken = (): string => {
  const csrfToken = localStorage.getItem('csrf_token');
  if (csrfToken) {
    return csrfToken;
  }
  
  const newToken = crypto.randomUUID();
  localStorage.setItem('csrf_token', newToken);
  return newToken;
};

// Validate CSRF token for requests
export const validateCSRFToken = (token: string): boolean => {
  const storedToken = localStorage.getItem('csrf_token');
  return token === storedToken;
};

// Axios interceptor to add CSRF token to requests
export const setupCSRFInterceptor = () => {
  axios.interceptors.request.use((config) => {
    const csrfToken = generateCSRFToken();
    config.headers['X-CSRF-Token'] = csrfToken;
    return config;
  });
};

// Clear CSRF token on logout
export const clearCSRFToken = () => {
  localStorage.removeItem('csrf_token');
};
