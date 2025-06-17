import { ContainerModule } from 'inversify';

import { SignInStore } from './store/sign-in/sign-in.store.ts';
import { SignInStoreInterface } from './store/sign-in/sign-in-store.interface.ts';

import { SignInController } from './controller/sign-in.controller.ts';
import { SignInControllerInterface } from './controller/sign-in-controller.interface.ts';

export const containerModule = new ContainerModule((container) => {
  container.bind(SignInStoreInterface).to(SignInStore);

  container.bind(SignInControllerInterface).to(SignInController);
});
