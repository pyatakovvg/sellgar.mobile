import React from 'react';
import { CommonActions } from '@react-navigation/native';

import { useApp } from './app.hook.ts';

export const useNavigateTo = () => {
  const app = useApp();

  return React.useCallback(
    (path: string, params: any) => {
      const paths = path.split('/');

      const getPaths = (paths: string[]): any[] => {
        const path = paths.shift();

        if (paths.length > 1) {
          return [
            {
              name: path,
              state: {
                routes: getPaths(paths),
              },
            },
          ];
        }

        return [
          {
            name: path,
            params,
          },
        ];
      };

      app.navigationRef?.current?.dispatch(
        CommonActions.reset({
          index: 0,
          routes: getPaths(paths),
        }),
      );
    },
    [app.navigationRef],
  );
};
