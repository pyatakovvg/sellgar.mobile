import { BiometryTypes } from 'react-native-biometrics';

export const BIOMETRY_TYPE_TOUCH_ID = BiometryTypes.TouchID;
export const BIOMETRY_TYPE_FACE_ID = BiometryTypes.FaceID;
export const BIOMETRY_TYPE_BIOMETRY = BiometryTypes.Biometrics;

export type TBiometry = typeof BIOMETRY_TYPE_TOUCH_ID | typeof BIOMETRY_TYPE_FACE_ID;

export abstract class BiometryServiceInterface {
  abstract available(): Promise<boolean>;
  abstract availableType(type: TBiometry): Promise<boolean>;
}
