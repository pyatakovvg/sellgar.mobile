import { injectable } from 'inversify';
import { createMMKV } from 'react-native-mmkv';

import { SecureStoreServiceInterface } from './secure-store-service.interface.ts';

@injectable()
export class SecureStoreService implements SecureStoreServiceInterface {
  private readonly storage = createMMKV();

  removeData(key: string) {
    this.storage.remove(key);
  }

  getData(key: string) {
    const data = this.storage.getString(key);
    return data ? JSON.parse(data) : null;
  }

  setData(key: string, value: string) {
    this.storage.set(key, JSON.stringify(value));
  }

  hasKey(key: string) {
    const keys = this.storage.getAllKeys();
    return keys.indexOf(key) > -1;
  }
}
