# Secure Storage Utility

## Overview

The `secureStorage` utility provides encrypted localStorage functionality for storing sensitive data like authentication tokens. It uses the Web Crypto API (AES-GCM encryption) to encrypt data before storing it in localStorage.

## Features

- **AES-GCM Encryption**: Uses 256-bit AES-GCM encryption for secure data storage
- **Automatic Key Management**: Generates and manages encryption keys automatically
- **Session-based Keys**: Encryption keys are stored in sessionStorage and regenerated on each session
- **Fallback Support**: Gracefully falls back to plain storage if encryption is not available
- **Type-safe**: Written in TypeScript with full type support
- **Browser Compatible**: Uses native Web Crypto API (no external dependencies)

## Security Features

### Encryption
- **Algorithm**: AES-GCM (Advanced Encryption Standard - Galois/Counter Mode)
- **Key Size**: 256 bits
- **IV (Initialization Vector)**: 12 bytes, randomly generated for each encryption
- **Key Storage**: Encryption keys are stored in sessionStorage (cleared when browser closes)

### Key Management
- Keys are generated using `crypto.getRandomValues()` for cryptographic randomness
- Keys are unique per browser session
- Keys are automatically regenerated when the session ends
- Keys are never transmitted or stored permanently

## Usage

### Basic Usage

```typescript
import secureStorage from '../utils/secureStorage';

// Store data (synchronous)
secureStorage.setItemSync('myKey', 'myValue');

// Retrieve data (synchronous)
const value = secureStorage.getItemSync('myKey');

// Remove data
secureStorage.removeItem('myKey');

// Check if key exists
const exists = secureStorage.hasItem('myKey');

// Clear all secure storage items
secureStorage.clear();
```

### Async Usage (for future encryption methods)

```typescript
// Store data (async)
await secureStorage.setItem('myKey', 'myValue');

// Retrieve data (async)
const value = await secureStorage.getItem('myKey');
```

## Configuration

### Environment Variables

You can disable encryption by setting the environment variable:

```env
VITE_USE_ENCRYPTION=false
```

When encryption is disabled, data is stored in plain text (useful for development/debugging).

## Storage Prefix

All items stored by secureStorage are prefixed with `__secure__` to:
- Distinguish secure storage items from regular localStorage items
- Allow selective clearing of secure items
- Prevent naming conflicts

## Browser Compatibility

The secure storage utility requires:
- Modern browsers with Web Crypto API support
- `window.crypto.subtle` availability
- Support for AES-GCM encryption

**Supported Browsers:**
- Chrome 37+
- Firefox 34+
- Safari 11+
- Edge 79+

**Fallback Behavior:**
If Web Crypto API is not available, the utility falls back to plain localStorage storage.

## Security Considerations

### Strengths
1. **Client-side Encryption**: Data is encrypted before being stored in localStorage
2. **Session-based Keys**: Keys are regenerated on each session, limiting exposure
3. **No External Dependencies**: Uses native browser APIs
4. **Random IVs**: Each encryption uses a unique initialization vector

### Limitations
1. **Client-side Storage**: Data is still stored on the client (less secure than HttpOnly cookies)
2. **XSS Vulnerability**: JavaScript can still access the data if XSS attack occurs
3. **Key in Memory**: Encryption key is stored in sessionStorage (accessible to JavaScript)
4. **Not a Replacement for Server-side Security**: Should be used in conjunction with server-side security measures

### Best Practices
1. **Use HTTPS**: Always use HTTPS to prevent man-in-the-middle attacks
2. **Short Token Lifetimes**: Use short-lived tokens and refresh tokens
3. **Token Rotation**: Implement token rotation on refresh
4. **CSP Headers**: Implement Content Security Policy headers
5. **XSS Prevention**: Sanitize all user inputs to prevent XSS attacks

## HttpOnly Cookies Alternative

For production applications, consider using HttpOnly cookies for token storage:

### Advantages of HttpOnly Cookies
- Not accessible via JavaScript (XSS protection)
- Automatically sent with requests
- More secure than localStorage

### Implementation
HttpOnly cookies require server-side configuration:

```javascript
// Server-side (Node.js/Express example)
res.cookie('authToken', token, {
  httpOnly: true,
  secure: true, // HTTPS only
  sameSite: 'strict',
  maxAge: 3600000 // 1 hour
});
```

## Migration from Plain localStorage

If you're migrating from plain localStorage:

```typescript
// Old code
localStorage.setItem('authToken', token);
const token = localStorage.getItem('authToken');

// New code
secureStorage.setItemSync('authToken', token);
const token = secureStorage.getItemSync('authToken');
```

## Testing

### Disable Encryption for Testing

```typescript
// In your test setup
process.env.VITE_USE_ENCRYPTION = 'false';
```

### Mock secureStorage

```typescript
jest.mock('../utils/secureStorage', () => ({
  default: {
    setItemSync: jest.fn(),
    getItemSync: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    hasItem: jest.fn(),
  },
}));
```

## Performance

- **Encryption**: ~1-2ms per operation (negligible for token storage)
- **Decryption**: ~1-2ms per operation
- **Key Generation**: ~5-10ms (only once per session)

## Troubleshooting

### Encryption Fails
- Check browser compatibility
- Verify Web Crypto API is available
- Check console for error messages
- Try disabling encryption with `VITE_USE_ENCRYPTION=false`

### Data Not Persisting
- Check if localStorage is available
- Verify storage quota is not exceeded
- Check for browser privacy settings blocking localStorage

### Decryption Fails
- Encryption key may have changed (new session)
- Data may be corrupted
- Clear storage and re-authenticate

## Future Enhancements

- [ ] Add support for IndexedDB for larger data storage
- [ ] Implement key derivation from user password
- [ ] Add data integrity checks (HMAC)
- [ ] Support for multiple encryption algorithms
- [ ] Add compression before encryption
- [ ] Implement automatic key rotation

