import { Container } from 'inversify';

import { Config, ConfigInterface } from '@library/domain';
import { HttpClient, HttpClientInterface } from '@library/domain';
import { BiometryService, BiometryServiceInterface } from '@library/domain';
import { AuthTokenStoreService, AuthTokenStoreServiceInterface } from '@library/domain';
import { SecureStoreService, SecureStoreServiceInterface } from '@library/domain';
import { AuthGateway, AuthGatewayInterface, AuthService, AuthServiceInterface } from '@library/domain';

import { ApplicationController } from './controller/application.controller.ts';
import { ApplicationControllerInterface } from './controller/application-controller.interface.ts';
import { ApplicationStore } from './store/application.store.ts';
import { ApplicationStoreInterface } from './store/application-store.interface.ts';

const container = new Container();

container.bind(ConfigInterface).to(Config);
container.bind(HttpClientInterface).to(HttpClient);

container.bind(SecureStoreServiceInterface).to(SecureStoreService);
container.bind(AuthTokenStoreServiceInterface).to(AuthTokenStoreService);

container.bind(AuthGatewayInterface).to(AuthGateway);
container.bind(AuthServiceInterface).to(AuthService);

container.bind(BiometryServiceInterface).to(BiometryService);

container.bind(ApplicationStoreInterface).to(ApplicationStore);
container.bind(ApplicationControllerInterface).to(ApplicationController).inSingletonScope();

export { container };
