import React from 'react';
import { CommonActions, NavigationContainerRef, ParamListBase } from '@react-navigation/native';

export const resetToStrategy = (
  navigationRef: React.RefObject<NavigationContainerRef<ParamListBase>>,
  path: string,
  params: any,
) => {
  const pathParts = path.split('/');

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [
      pathParts.reduceRight<{ name: string; params?: any; state?: any }>((acc, part, index) => {
        if (index === pathParts.length - 1) {
          return { name: part, params };
        }
        return {
          name: part,
          state: {
            routes: [acc],
          },
        };
      }, {} as any),
    ],
  });

  navigationRef.current.dispatch(resetAction);
};
