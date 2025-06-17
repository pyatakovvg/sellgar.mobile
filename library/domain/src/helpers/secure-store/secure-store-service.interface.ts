export abstract class SecureStoreServiceInterface {
  abstract setData(key: string, value: string): void;
  abstract getData(key: string): string | null;
  abstract removeData(key: string): void;
  abstract hasKey(key: string): boolean;
}
