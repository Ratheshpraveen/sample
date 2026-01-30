import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

interface RequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
  _startTime?: number;
}

export const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};

export const setupRequestInterceptor = (
  instance: AxiosInstance,
  getToken: () => string | null
): void => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const requestConfig = config as RequestConfig;
      
      requestConfig._startTime = Date.now();

      const token = getToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      if (import.meta.env.DEV) {
        console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`);
      }

      return config;
    },
    (error: AxiosError) => {
      console.error('[Request Error]', error.message);
      return Promise.reject(error);
    }
  );
};

export const setupResponseInterceptor = (
  instance: AxiosInstance,
  refreshAccessToken: () => Promise<string | null>,
  clearTokens: () => void,
  isRefreshing: () => boolean,
  setIsRefreshing: (value: boolean) => void,
  subscribeTokenRefresh: (callback: (token: string) => void) => void,
  onTokenRefreshed: (token: string) => void
): void => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      const config = response.config as RequestConfig;
      
      if (import.meta.env.DEV && config._startTime) {
        const duration = Date.now() - config._startTime;
        console.log(
          `[Response] ${config.method?.toUpperCase()} ${config.url} - ${response.status} (${duration}ms)`
        );
      }

      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config as RequestConfig;

      if (!originalRequest) {
        return Promise.reject(error);
      }

      if (error.code === 'ECONNABORTED') {
        console.error('[Timeout Error] Request timed out');
        return Promise.reject(new Error('Request timed out. Please try again.'));
      }

      if (error.code === 'ERR_NETWORK') {
        console.error('[Network Error] Network connection failed');
        return Promise.reject(new Error('Network error. Please check your connection.'));
      }

      if (error.response?.status === 429) {
        console.warn('[Rate Limit] Too many requests');
        return Promise.reject(new Error('Too many requests. Please try again later.'));
      }

      if (error.response?.status === 403) {
        console.warn('[Forbidden] Access denied');
        return Promise.reject(new Error('Access denied. You do not have permission.'));
      }

      if (error.response?.status === 404) {
        console.warn('[Not Found] Resource not found');
        return Promise.reject(new Error('Resource not found.'));
      }

      if (error.response?.status === 500) {
        console.error('[Server Error] Internal server error');
        return Promise.reject(new Error('Server error. Please try again later.'));
      }

      if (error.response?.status === 503) {
        console.error('[Service Unavailable] Service temporarily unavailable');
        return Promise.reject(new Error('Service unavailable. Please try again later.'));
      }

      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        originalRequest.url !== '/auth/refresh' &&
        originalRequest.url !== '/auth/login'
      ) {
        originalRequest._retry = true;

        if (isRefreshing()) {
          return new Promise((resolve) => {
            subscribeTokenRefresh((token: string) => {
              if (originalRequest.headers) {
                originalRequest.headers.Authorization = `Bearer ${token}`;
              }
              resolve(instance(originalRequest));
            });
          });
        }

        setIsRefreshing(true);

        try {
          const newToken = await refreshAccessToken();

          if (newToken) {
            setIsRefreshing(false);
            onTokenRefreshed(newToken);

            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
            }
            return instance(originalRequest);
          }
        } catch (refreshError) {
          setIsRefreshing(false);
          clearTokens();
          if (typeof window !== 'undefined') {
            window.location.href = '/login';
          }
          return Promise.reject(refreshError);
        }
      }

      if (import.meta.env.DEV) {
        console.error(
          `[Response Error] ${originalRequest.method?.toUpperCase()} ${originalRequest.url} - ${error.response?.status || 'Network Error'}`
        );
      }

      return Promise.reject(error);
    }
  );
};

export const createCancelToken = () => {
  return axios.CancelToken.source();
};

export const isCancel = (error: any): boolean => {
  return axios.isCancel(error);
};

export { AxiosError };
