import { MainLayout } from '@layout/main';
import { Application, PublicRouter, PrivateRouter, Screen } from '@library/app';

import React from 'react';
import { AppRegistry } from 'react-native';

import { name as appName } from '../app.json';

const app = new Application({
  screenLayout: (props) => <MainLayout>{props.children}</MainLayout>,
  routers: [
    new PublicRouter({
      screens: [
        new Screen('sign-in', {
          module: () => import('@screen/dashboard'),
          layout: (props) => <MainLayout>{props.children}</MainLayout>,
        }),
      ],
    }),
    new PrivateRouter({
      screens: [
        new Screen('dashboard', {
          module: () => import('@screen/dashboard'),
          layout: (props) => <MainLayout>{props.children}</MainLayout>,
        }),
        new Screen('profile', {
          module: () => import('@screen/profile'),
          layout: (props) => <MainLayout>{props.children}</MainLayout>,
        }),
      ],
    }),
  ],
});

(async () => {
  try {
    const appComponent = await app.createView();

    AppRegistry.registerComponent(appName, () => appComponent);
  } catch (error) {
    console.error(error);
  }
})();
