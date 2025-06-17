export abstract class AuthTokenStoreServiceInterface {
  abstract getAccessToken(): string | null;
  abstract getRefreshToken(): string | null;
  abstract setAccessToken(token: string): void;
  abstract setRefreshToken(token: string): void;
  abstract clearAuthData(): void;
}
