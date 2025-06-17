import React from 'react';
import { StackActions, NavigationContainerRef, ParamListBase } from '@react-navigation/native';

export const replaceStrategy = (
  navigationRef: React.RefObject<NavigationContainerRef<ParamListBase>>,
  path: string,
  params: any,
) => {
  navigationRef?.current?.dispatch(StackActions.replace(path, params));
};
