import { ThemeProvider } from '@library/kit';

import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, NavigationContainerRef, ParamListBase } from '@react-navigation/native';

import { ApplicationProvider } from './app.provider.tsx';

interface IOptions {
  screenLayout?: (props: React.PropsWithChildren) => React.ReactElement;
  routers: any[];
}

const navRef = React.createRef() as React.RefObject<NavigationContainerRef<ParamListBase>>;

export class Application {
  constructor(private readonly options: IOptions) {}

  async createView() {
    const screens: any = {};

    for (const router of this.options.routers) {
      if (router.routeName in screens) {
        throw Error('Route "' + router.routeName + '" already exist');
      }

      screens[router.routeName] = await router.createView();
    }

    const Stack = createNativeStackNavigator({
      screenOptions: {
        headerShown: false,
      },
      screenLayout: this.options?.screenLayout,
      screens,
    });

    const Navigation = createStaticNavigation(Stack);

    return () => {
      return (
        <ThemeProvider>
          <ErrorBoundary>
            <ApplicationProvider navigationRef={navRef}>
              <SafeAreaProvider>
                <Navigation ref={navRef} />
              </SafeAreaProvider>
            </ApplicationProvider>
          </ErrorBoundary>
        </ThemeProvider>
      );
    };
  }
}
