import { AuthServiceInterface } from '@library/domain';

import { inject, injectable } from 'inversify';
import { Alert } from 'react-native';

import { SignInControllerInterface } from './sign-in-controller.interface.ts';
import { SignInStoreInterface } from '../store/sign-in/sign-in-store.interface.ts';

@injectable()
export class SignInController implements SignInControllerInterface {
  constructor(
    @inject(SignInStoreInterface) readonly signInStore: SignInStoreInterface,
    @inject(AuthServiceInterface) private readonly authService: AuthServiceInterface,
  ) {}

  async signInByCredentials(logon: string, password: string): Promise<void> {
    try {
      await this.authService.signIn(logon, password);
    } catch (err) {
      Alert.alert('Неверный логин или пароль');
    }
  }
}
