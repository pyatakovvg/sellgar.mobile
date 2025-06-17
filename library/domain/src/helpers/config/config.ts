import { injectable } from 'inversify';

import { ConfigInterface, envObject } from './config.interface.ts';

@injectable()
export class Config implements ConfigInterface {
  constructor() {}

  get<K extends keyof typeof envObject>(key: K): (typeof envObject)[K] {
    return envObject[key];
  }
}
