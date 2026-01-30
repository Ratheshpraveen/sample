class SecureStorage {
  private readonly storagePrefix = '__secure__';
  private encryptionKey: CryptoKey | null = null;
  private readonly useEncryption: boolean;

  constructor() {
    this.useEncryption = import.meta.env.VITE_USE_ENCRYPTION !== 'false';
    if (this.useEncryption && typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
      this.initializeEncryption();
    }
  }

  private async initializeEncryption(): Promise<void> {
    try {
      const keyData = await this.getOrCreateKeyData();
      this.encryptionKey = await window.crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
      );
    } catch (error) {
      console.warn('Failed to initialize encryption, falling back to plain storage:', error);
      this.encryptionKey = null;
    }
  }

  private async getOrCreateKeyData(): Promise<Uint8Array> {
    const keyStorageKey = '__encryption_key_data__';
    const storedKey = sessionStorage.getItem(keyStorageKey);

    if (storedKey) {
      return this.base64ToUint8Array(storedKey);
    }

    const keyData = window.crypto.getRandomValues(new Uint8Array(32));
    sessionStorage.setItem(keyStorageKey, this.uint8ArrayToBase64(keyData));
    return keyData;
  }

  private uint8ArrayToBase64(array: Uint8Array): string {
    return btoa(String.fromCharCode(...array));
  }

  private base64ToUint8Array(base64: string): Uint8Array {
    const binary = atob(base64);
    const array = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      array[i] = binary.charCodeAt(i);
    }
    return array;
  }

  private async encrypt(data: string): Promise<string> {
    if (!this.useEncryption || !this.encryptionKey) {
      return data;
    }

    try {
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(data);
      const iv = window.crypto.getRandomValues(new Uint8Array(12));

      const encryptedBuffer = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        this.encryptionKey,
        dataBuffer
      );

      const encryptedArray = new Uint8Array(encryptedBuffer);
      const combined = new Uint8Array(iv.length + encryptedArray.length);
      combined.set(iv);
      combined.set(encryptedArray, iv.length);

      return this.uint8ArrayToBase64(combined);
    } catch (error) {
      console.error('Encryption failed:', error);
      return data;
    }
  }

  private async decrypt(encryptedData: string): Promise<string | null> {
    if (!this.useEncryption || !this.encryptionKey) {
      return encryptedData;
    }

    try {
      const combined = this.base64ToUint8Array(encryptedData);
      const iv = combined.slice(0, 12);
      const encryptedArray = combined.slice(12);

      const decryptedBuffer = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        this.encryptionKey,
        encryptedArray
      );

      const decoder = new TextDecoder();
      return decoder.decode(decryptedBuffer);
    } catch (error) {
      console.error('Decryption failed:', error);
      return null;
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    try {
      const encryptedValue = await this.encrypt(value);
      const storageKey = `${this.storagePrefix}${key}`;
      localStorage.setItem(storageKey, encryptedValue);
    } catch (error) {
      console.error('Failed to store item:', error);
    }
  }

  async getItem(key: string): Promise<string | null> {
    try {
      const storageKey = `${this.storagePrefix}${key}`;
      const encryptedValue = localStorage.getItem(storageKey);

      if (!encryptedValue) {
        return null;
      }

      return await this.decrypt(encryptedValue);
    } catch (error) {
      console.error('Failed to retrieve item:', error);
      return null;
    }
  }

  setItemSync(key: string, value: string): void {
    try {
      const storageKey = `${this.storagePrefix}${key}`;
      localStorage.setItem(storageKey, value);
    } catch (error) {
      console.error('Failed to store item:', error);
    }
  }

  getItemSync(key: string): string | null {
    try {
      const storageKey = `${this.storagePrefix}${key}`;
      return localStorage.getItem(storageKey);
    } catch (error) {
      console.error('Failed to retrieve item:', error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      const storageKey = `${this.storagePrefix}${key}`;
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  }

  clear(): void {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(this.storagePrefix)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error('Failed to clear storage:', error);
    }
  }

  hasItem(key: string): boolean {
    const storageKey = `${this.storagePrefix}${key}`;
    return localStorage.getItem(storageKey) !== null;
  }
}

const secureStorage = new SecureStorage();

export default secureStorage;
export { SecureStorage };
