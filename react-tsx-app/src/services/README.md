# Authentication Services

## Overview

This directory contains the authentication services for the application, including JWT token management, axios interceptors, and API communication.

## Files

### authService.ts

The main authentication service that handles all authentication-related operations.

**Features:**
- User login and registration
- JWT token management
- Automatic token refresh
- Secure token storage (encrypted localStorage)
- Token validation and expiration checking
- User information extraction from tokens

**Key Methods:**
- `login(credentials)`: Authenticate user and store tokens
- `register(credentials)`: Register new user
- `logout()`: Clear tokens from storage
- `logoutFromServer()`: Logout from server and clear tokens
- `refreshAccessToken()`: Refresh expired access token
- `isAuthenticated()`: Check if user is authenticated
- `getUserFromToken()`: Extract user information from token
- `getApiInstance()`: Get configured axios instance

### axiosConfig.ts

Configures axios interceptors for automatic token management and comprehensive error handling.

**Features:**
- Automatic Bearer token injection
- Request/response logging (development mode)
- Performance monitoring
- Automatic token refresh on 401 errors
- Concurrent request handling during token refresh
- Network error handling
- Timeout handling
- HTTP status code handling (403, 404, 429, 500, 503)
- Request cancellation support

## Axios Interceptors

### Request Interceptor

Automatically adds authentication token to all requests:

```typescript
import authService from './authService';

const api = authService.getApiInstance();

// Token is automatically added to headers
const response = await api.get('/protected-endpoint');
```

**Features:**
- Automatic Bearer token injection
- Request timing for performance monitoring
- Development mode logging
- Error handling for failed requests

### Response Interceptor

Handles responses and errors automatically:

**Success Responses:**
- Logs response status and duration (dev mode)
- Returns response data unchanged

**Error Handling:**

#### 401 Unauthorized
- Automatically attempts token refresh
- Queues concurrent requests during refresh
- Retries original request with new token
- Redirects to login if refresh fails
- Prevents infinite refresh loops

#### 403 Forbidden
- Returns user-friendly error message
- Logs warning to console

#### 404 Not Found
- Returns "Resource not found" message
- Logs warning to console

#### 429 Too Many Requests
- Returns rate limit error message
- Logs warning to console

#### 500 Internal Server Error
- Returns server error message
- Logs error to console

#### 503 Service Unavailable
- Returns service unavailable message
- Logs error to console

#### Network Errors
- `ECONNABORTED`: Timeout error
- `ERR_NETWORK`: Network connection failed

## Token Refresh Flow

### Automatic Token Refresh

When a request receives a 401 Unauthorized response:

1. **Check if refresh is already in progress**
   - If yes: Queue the request
   - If no: Start refresh process

2. **Attempt token refresh**
   - Call `/auth/refresh` endpoint
   - Store new tokens securely

3. **Handle refresh result**
   - **Success**: Retry all queued requests with new token
   - **Failure**: Clear tokens and redirect to login

4. **Prevent infinite loops**
   - Don't refresh on `/auth/refresh` endpoint
   - Don't refresh on `/auth/login` endpoint
   - Mark requests as `_retry` to prevent multiple attempts

### Concurrent Request Handling

Multiple requests that fail with 401 are handled efficiently:

```typescript
// Multiple requests made simultaneously
Promise.all([
  api.get('/endpoint1'),
  api.get('/endpoint2'),
  api.get('/endpoint3')
]);

// Only ONE token refresh is triggered
// All requests are queued and retried with new token
```

## Usage Examples

### Basic Authentication

```typescript
import authService from './services/authService';

// Login
try {
  const response = await authService.login({
    email: 'user@example.com',
    password: 'password123'
  });
  console.log('Login successful:', response);
} catch (error) {
  console.error('Login failed:', error.message);
}

// Check authentication
if (authService.isAuthenticated()) {
  console.log('User is authenticated');
}

// Get user info
const user = authService.getUserFromToken();
console.log('User:', user);

// Logout
authService.logout();
```

### Making API Requests

```typescript
import authService from './services/authService';

const api = authService.getApiInstance();

// GET request (token automatically added)
try {
  const response = await api.get('/users/profile');
  console.log('Profile:', response.data);
} catch (error) {
  console.error('Request failed:', error.message);
}

// POST request
try {
  const response = await api.post('/users/update', {
    name: 'John Doe'
  });
  console.log('Updated:', response.data);
} catch (error) {
  console.error('Update failed:', error.message);
}
```

### Request Cancellation

```typescript
import { createCancelToken, isCancel } from './services/axiosConfig';
import authService from './services/authService';

const api = authService.getApiInstance();
const cancelToken = createCancelToken();

// Make cancellable request
try {
  const response = await api.get('/long-running-request', {
    cancelToken: cancelToken.token
  });
} catch (error) {
  if (isCancel(error)) {
    console.log('Request cancelled');
  } else {
    console.error('Request failed:', error);
  }
}

// Cancel the request
cancelToken.cancel('User cancelled request');
```

## Error Handling

### Handling Authentication Errors

```typescript
import authService from './services/authService';

try {
  await authService.login(credentials);
} catch (error) {
  if (error.message === 'Invalid email or password') {
    // Show invalid credentials message
  } else if (error.message.includes('Too many login attempts')) {
    // Show rate limit message
  } else {
    // Show generic error message
  }
}
```

### Handling API Errors

```typescript
import authService from './services/authService';
import { AxiosError } from './services/axiosConfig';

const api = authService.getApiInstance();

try {
  const response = await api.get('/data');
} catch (error) {
  if (error instanceof AxiosError) {
    switch (error.response?.status) {
      case 401:
        // Automatically handled by interceptor
        break;
      case 403:
        // Access denied
        break;
      case 404:
        // Resource not found
        break;
      case 429:
        // Rate limited
        break;
      case 500:
        // Server error
        break;
      default:
        // Other error
    }
  }
}
```

## Configuration

### Environment Variables

```env
# API Base URL
VITE_API_URL=http://localhost:3000/api

# Enable/disable encryption
VITE_USE_ENCRYPTION=true
```

### Axios Configuration

The axios instance is configured with:
- **Base URL**: From `VITE_API_URL` or defaults to `http://localhost:3000/api`
- **Timeout**: 30 seconds
- **Headers**: `Content-Type: application/json`

### Custom Configuration

To customize the axios instance:

```typescript
import authService from './services/authService';

const api = authService.getApiInstance();

// Add custom headers
api.defaults.headers.common['X-Custom-Header'] = 'value';

// Change timeout
api.defaults.timeout = 60000; // 60 seconds

// Add custom interceptor
api.interceptors.request.use((config) => {
  // Custom logic
  return config;
});
```

## Security Best Practices

### Token Storage
- Tokens are encrypted using AES-GCM before storing in localStorage
- Encryption keys are session-based (cleared on browser close)
- Consider using HttpOnly cookies for production

### Token Refresh
- Refresh tokens are validated before use
- Expired refresh tokens are automatically cleared
- Failed refresh attempts redirect to login

### Request Security
- Always use HTTPS in production
- Tokens are sent in Authorization header (not URL)
- Implement CSRF protection on server-side
- Use short-lived access tokens (15-30 minutes)
- Use longer-lived refresh tokens (7-30 days)

### Error Handling
- Never expose sensitive information in error messages
- Log errors for debugging (development only)
- Implement rate limiting on server-side
- Handle network errors gracefully

## Performance Considerations

### Request Timing
- Development mode logs request duration
- Monitor slow requests (>1000ms)
- Implement request caching where appropriate

### Token Refresh
- Only one refresh request at a time
- Concurrent requests are queued
- Failed requests are not retried indefinitely

### Memory Management
- Interceptors are properly cleaned up
- Request queues are cleared after processing
- Cancel tokens prevent memory leaks

## Troubleshooting

### Token Refresh Fails
- Check if refresh token is valid
- Verify `/auth/refresh` endpoint is working
- Check network connectivity
- Clear storage and re-authenticate

### Requests Not Authenticated
- Verify token is stored correctly
- Check if token is expired
- Ensure interceptor is configured
- Check Authorization header in network tab

### Infinite Redirect Loop
- Verify refresh endpoint is excluded from refresh logic
- Check if login endpoint is excluded
- Ensure `_retry` flag is set correctly

### CORS Errors
- Configure CORS on server-side
- Ensure credentials are included if needed
- Check allowed origins and methods

## Testing

### Mock authService

```typescript
jest.mock('./services/authService', () => ({
  default: {
    login: jest.fn(),
    logout: jest.fn(),
    isAuthenticated: jest.fn(),
    getUserFromToken: jest.fn(),
    getApiInstance: jest.fn(() => ({
      get: jest.fn(),
      post: jest.fn(),
    })),
  },
}));
```

### Test Token Refresh

```typescript
import authService from './services/authService';

test('should refresh token on 401', async () => {
  const api = authService.getApiInstance();
  
  // Mock 401 response
  api.get.mockRejectedValueOnce({
    response: { status: 401 }
  });
  
  // Mock successful refresh
  authService.refreshAccessToken.mockResolvedValueOnce('new-token');
  
  // Should retry with new token
  await api.get('/protected');
  
  expect(authService.refreshAccessToken).toHaveBeenCalled();
});
```

## Future Enhancements

- [ ] Add request retry logic for network errors
- [ ] Implement request deduplication
- [ ] Add request/response caching
- [ ] Support for multiple authentication schemes
- [ ] Add request priority queue
- [ ] Implement exponential backoff for retries
- [ ] Add request metrics and analytics
- [ ] Support for WebSocket authentication

