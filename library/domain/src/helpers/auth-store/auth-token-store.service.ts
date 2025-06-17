import { inject, injectable } from 'inversify';

import { SecureStoreServiceInterface } from '../secure-store';
import { AuthTokenStoreServiceInterface } from './auth-token-store-service.interface.ts';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

@injectable()
export class AuthTokenStoreService implements AuthTokenStoreServiceInterface {
  constructor(@inject(SecureStoreServiceInterface) private readonly secureStoreService: SecureStoreServiceInterface) {}

  getAccessToken(): string | null {
    return this.secureStoreService.getData(ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return this.secureStoreService.getData(REFRESH_TOKEN_KEY);
  }

  setAccessToken(token: string) {
    this.secureStoreService.setData(ACCESS_TOKEN_KEY, token);
  }

  setRefreshToken(token: string) {
    this.secureStoreService.setData(REFRESH_TOKEN_KEY, token);
  }

  clearAuthData() {
    this.secureStoreService.removeData(ACCESS_TOKEN_KEY);
    this.secureStoreService.removeData(REFRESH_TOKEN_KEY);
  }
}
