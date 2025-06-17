import { SecureStoreServiceInterface, BiometryServiceInterface } from '@library/domain';

import { inject, injectable } from 'inversify';
import DeviceInfo from 'react-native-device-info';

import { ApplicationStoreInterface, TApplicationAuthStep } from '../store/application-store.interface.ts';
import { ApplicationControllerInterface } from './application-controller.interface.ts';

const REFRESH_TOKEN = 'REFRESH_TOKEN';

const USE_PIN = 'USE_PIN';
const USE_BIOMETRY = 'USE_BIOMETRY';
const SKIP_ALTERNATIVE_SIGN_IN = 'SKIP_ALTERNATIVE_SIGN_IN';

@injectable()
export class ApplicationController implements ApplicationControllerInterface {
  private readonly uniqueDeviceId = DeviceInfo.getUniqueIdSync();

  constructor(
    @inject(ApplicationStoreInterface) readonly applicationStore: ApplicationStoreInterface,
    @inject(BiometryServiceInterface) private readonly biometryService: BiometryServiceInterface,
    @inject(SecureStoreServiceInterface) private readonly secureStoreService: SecureStoreServiceInterface,
  ) {}

  async setInitialized() {
    console.log('Checking application controller...');
    this.applicationStore.setInitialized(true);
  }

  async checkAuth() {
    console.log('Checking application controller...');
  }

  async checkSkipAlternativeSignIn(userId: string): Promise<boolean | null> {
    const key = `${SKIP_ALTERNATIVE_SIGN_IN}_${userId}`;
    try {
      const hasKey = this.secureStoreService.hasKey(key);
      if (hasKey) {
        const value = this.secureStoreService.getData(key);
        return value === 'true';
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  async checkUserUsePin(userId: string) {
    try {
      const value = this.secureStoreService.getData(`${USE_PIN}_${userId}`);
      return value === 'true';
    } catch (error) {
      return false;
    }
  }

  async checkSecuritySetup(userId: string) {
    try {
      const value = this.secureStoreService.getData(`security_setup_${userId}`);
      return value === 'true';
    } catch (error) {
      return false;
    }
  }

  async checkAuthVariant(userId: string): Promise<TApplicationAuthStep | null> {
    try {
      const variant = this.secureStoreService.getData(`security_variant_${userId}`);
      if (variant) {
        return variant as TApplicationAuthStep;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  async signOut() {
    const uniqueId = await DeviceInfo.getUniqueId();

    this.secureStoreService.removeData(`security_setup_${uniqueId}`);
    this.applicationStore.setAuth(false);
  }

  async signIn(login: string, password: string) {
    if (login === 'admin' && password === '123') {
      const uniqueId = await DeviceInfo.getUniqueId();

      const skipAlternativeSignIn = await this.checkSkipAlternativeSignIn(uniqueId);

      if (skipAlternativeSignIn !== null) {
        this.applicationStore.setAuth(true);
        this.secureStoreService.setData(`security_setup_${uniqueId}`, 'true');
      }
    } else {
      throw Error('Invalid login or password');
    }
  }
}
