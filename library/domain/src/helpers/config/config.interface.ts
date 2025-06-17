import { GATEWAY_API } from '@config/env';

export const envObject = {
  GATEWAY_API,
};

export abstract class ConfigInterface {
  abstract get<K extends keyof typeof envObject>(key: K): (typeof envObject)[K];
}
