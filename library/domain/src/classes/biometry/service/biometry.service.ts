import { injectable } from 'inversify';
import ReactNativeBiometrics from 'react-native-biometrics';

import { BIOMETRY_TYPE_BIOMETRY, BiometryServiceInterface, TBiometry } from './biometry-service.interface.ts';

@injectable()
export class BiometryService implements BiometryServiceInterface {
  private readonly instance = new ReactNativeBiometrics({ allowDeviceCredentials: true });

  async available() {
    this.instance.biometricKeysExist().then((b) => console.log('bbb', b));
    const available = await this.instance.isSensorAvailable();

    return available && available.biometryType === BIOMETRY_TYPE_BIOMETRY;
  }

  async availableType(type: TBiometry) {
    const available = await this.instance.isSensorAvailable();

    return available && available.biometryType === type;
  }
}
