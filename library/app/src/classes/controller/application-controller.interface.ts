import { ApplicationStoreInterface } from '../store/application-store.interface.ts';

export abstract class ApplicationControllerInterface {
  abstract applicationStore: ApplicationStoreInterface;

  abstract checkAuth(): void;
  abstract setInitialized(): void;
  abstract signOut(): void;
  abstract signIn(login: string, password: string): Promise<void>;
}
