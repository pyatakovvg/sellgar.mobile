import React from 'react';

import { useApp } from '../app.hook.ts';

import { replaceStrategy } from './strategy/replace.strategy.ts';
import { resetToStrategy } from './strategy/reset-to.strategy.ts';
import { navigateToStrategy } from './strategy/navigate-to.strategy.ts';

interface INavigate {
  replace(path: string, params?: any): void;
  resetTo(path: string, params?: any): void;
  navigateTo(path: string, params?: any): void;
}

export const useNavigate = (): INavigate => {
  const { navigationRef } = useApp();

  return {
    replace: React.useCallback(
      (path: string, params: any = {}) => replaceStrategy(navigationRef, path, params),
      [navigationRef],
    ),
    resetTo: React.useCallback(
      (path: string, params: any = {}) => resetToStrategy(navigationRef, path, params),
      [navigationRef],
    ),
    navigateTo: React.useCallback(
      (path: string, params: any = {}) => navigateToStrategy(navigationRef, path, params),
      [navigationRef],
    ),
  };
};
