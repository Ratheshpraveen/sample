import axios from 'axios';

class CSRFService {
  private static CSRF_TOKEN_KEY = 'csrf_token';

  // Fetch CSRF token from server
  static async fetchCSRFToken(): Promise<string | null> {
    try {
      const response = await axios.get('/api/csrf-token', {
        withCredentials: true // Important for cross-origin requests
      });
      
      const csrfToken = response.data.csrfToken;
      
      // Store CSRF token securely
      this.storeCSRFToken(csrfToken);
      
      return csrfToken;
    } catch (error) {
      console.error('Failed to fetch CSRF token', error);
      return null;
    }
  }

  // Store CSRF token (use HttpOnly cookie in a real-world scenario)
  private static storeCSRFToken(token: string): void {
    localStorage.setItem(this.CSRF_TOKEN_KEY, token);
  }

  // Get stored CSRF token
  static getCSRFToken(): string | null {
    return localStorage.getItem(this.CSRF_TOKEN_KEY);
  }

  // Setup axios interceptor for CSRF protection
  static setupCSRFInterceptors() {
    axios.interceptors.request.use(
      async (config) => {
        const csrfToken = this.getCSRFToken();
        
        if (csrfToken) {
          config.headers['X-CSRF-Token'] = csrfToken;
        }

        // Ensure HTTPS for sensitive requests
        if (config.url?.startsWith('/api/') && window.location.protocol !== 'https:') {
          throw new Error('Secure requests must use HTTPS');
        }

        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  // Rate limiting simulation (would typically be handled server-side)
  static setupRateLimiting() {
    const MAX_REQUESTS = 10;
    const WINDOW_MS = 60 * 1000; // 1 minute

    let requestCount = 0;
    let resetTimer: NodeJS.Timeout;

    axios.interceptors.request.use(
      (config) => {
        // Reset request count if window has passed
        if (!resetTimer) {
          resetTimer = setTimeout(() => {
            requestCount = 0;
            clearTimeout(resetTimer);
            resetTimer = null;
          }, WINDOW_MS);
        }

        // Check request count
        if (requestCount >= MAX_REQUESTS) {
          throw new Error('Too many requests. Please try again later.');
        }

        requestCount++;
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
}

// Initialize CSRF and rate limiting protections
CSRFService.setupCSRFInterceptors();
CSRFService.setupRateLimiting();

export default CSRFService;
