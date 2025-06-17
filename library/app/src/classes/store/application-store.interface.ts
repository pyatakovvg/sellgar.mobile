export const APPLICATION_SET_AUTH_STEP = 'APPLICATION_SET_AUTH_STEP';
export const APPLICATION_AUTH_STEP_PIN = 'APPLICATION_AUTH_STEP_PIN';
export const APPLICATION_AUTH_STEP_BIOMETRY = 'APPLICATION_AUTH_STEP_BIOMETRY';
export const APPLICATION_AUTH_STEP_ONLY_PASSWORD = 'APPLICATION_AUTH_STEP_ONLY_PASSWORD';

export const USE_PHASE_ALTERNATIVE_AUTH = 'USE_PHASE_ALTERNATIVE_AUTH';
export const DO_NOT_USE_PHASE_ALTERNATIVE_AUTH = 'DO_NOT_USE_PHASE_ALTERNATIVE_AUTH';
export const DO_NOT_SET_PHASE_ALTERNATIVE_AUTH = 'DO_NOT_SET_PHASE_ALTERNATIVE_AUTH';

export type TUsePhaseAuth =
  | typeof USE_PHASE_ALTERNATIVE_AUTH
  | typeof DO_NOT_USE_PHASE_ALTERNATIVE_AUTH
  | typeof DO_NOT_SET_PHASE_ALTERNATIVE_AUTH;

export type TApplicationAuthStep =
  | typeof APPLICATION_AUTH_STEP_PIN
  | typeof APPLICATION_SET_AUTH_STEP
  | typeof APPLICATION_AUTH_STEP_BIOMETRY
  | typeof APPLICATION_AUTH_STEP_ONLY_PASSWORD;

export abstract class ApplicationStoreInterface {
  abstract isInitialized: boolean;
  abstract isAuth: boolean;
  abstract authPhase: TUsePhaseAuth;
  abstract authStep: TApplicationAuthStep;

  abstract setAuth(state: boolean): void;
  abstract setInitialized(state: boolean): void;
  abstract setAuthStep(authStep: TApplicationAuthStep): void;
  abstract setAuthPhase(authPhase: TUsePhaseAuth): void;
}
