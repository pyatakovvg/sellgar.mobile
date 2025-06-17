import { injectable } from 'inversify';
import { observable, action, computed, makeAutoObservable } from 'mobx';

import { SignInStoreInterface } from './sign-in-store.interface.ts';

@injectable()
export class SignInStore implements SignInStoreInterface {
  @observable private _inProcess: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get inProcess() {
    return this._inProcess;
  }

  @action.bound
  setProcess(state: boolean) {
    this._inProcess = state;
  }
}
