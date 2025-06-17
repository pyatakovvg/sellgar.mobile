import React from 'react';
import { Container } from 'inversify';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';

import { ApplicationControllerInterface } from './classes/controller/application-controller.interface.ts';

interface IContext {
  navigationRef: React.RefObject<NavigationContainerRef<ParamListBase>>;
  container: Container;
  controller: ApplicationControllerInterface;
}

export const context = React.createContext({} as IContext);
export const Provider = context.Provider;
