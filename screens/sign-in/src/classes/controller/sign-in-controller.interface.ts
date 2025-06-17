import { SignInStoreInterface } from '../store/sign-in/sign-in-store.interface.ts';

export abstract class SignInControllerInterface {
  abstract readonly signInStore: SignInStoreInterface;

  abstract signInByCredentials(logon: string, password: string): Promise<void>;
}
