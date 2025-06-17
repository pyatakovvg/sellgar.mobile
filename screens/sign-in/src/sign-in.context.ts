import React from 'react';

import { SignInControllerInterface } from './classes/controller/sign-in-controller.interface.ts';

interface IContext {
  controller: SignInControllerInterface;
}

export const context = React.createContext({} as IContext);
export const Provider = context.Provider;
