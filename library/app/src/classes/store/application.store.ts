import { injectable } from 'inversify';
import { observable, computed, action, makeAutoObservable } from 'mobx';

import {
  ApplicationStoreInterface,
  type TUsePhaseAuth,
  type TApplicationAuthStep,
  DO_NOT_SET_PHASE_ALTERNATIVE_AUTH,
  APPLICATION_AUTH_STEP_ONLY_PASSWORD,
} from './application-store.interface.ts';

@injectable()
export class ApplicationStore implements ApplicationStoreInterface {
  @observable private _isAuth: boolean = false;
  @observable private _isInitialized: boolean = false;
  @observable private _authPhase: TUsePhaseAuth = DO_NOT_SET_PHASE_ALTERNATIVE_AUTH;
  @observable private _authStep: TApplicationAuthStep = APPLICATION_AUTH_STEP_ONLY_PASSWORD;

  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get isAuth() {
    return this._isAuth;
  }

  @computed
  get authPhase() {
    return this._authPhase;
  }

  @computed
  get authStep() {
    return this._authStep;
  }

  @computed
  get isInitialized() {
    return this._isInitialized;
  }

  @action.bound
  setAuth(state: boolean) {
    this._isAuth = state;
  }

  @action.bound
  setAuthPhase(authPhase: TUsePhaseAuth) {
    this._authPhase = authPhase;
  }

  @action.bound
  setAuthStep(authStep: TApplicationAuthStep) {
    this._authStep = authStep;
  }

  @action.bound
  setInitialized(state: boolean) {
    this._isInitialized = state;
  }
}
