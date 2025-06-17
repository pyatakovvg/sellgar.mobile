export abstract class SignInStoreInterface {
  abstract inProcess: boolean;

  abstract setProcess(state: boolean): void;
}
