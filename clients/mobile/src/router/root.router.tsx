import { useApp } from '@library/app';
import { MainLayout } from '@layout/main';
import { SIGN_IN_ROUTE_NAME, SignInScreen } from '@screen/sign-in';
import { SIGN_UP_ROUTE_NAME, SignUpScreen } from '@screen/sign-up';
import { PROFILE_ROUTE_NAME, ProfileScreen } from '@screen/profile';
import { DASHBOARD_ROUTE_NAME, DashboardScreen } from '@screen/dashboard';

import React from 'react';
import { observer } from 'mobx-react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Tabs } from './tabs';

const Stack = createNativeStackNavigator();
const TabsStack = createBottomTabNavigator();

const HOME_GROUP_ROUTE_NAME = 'Home';

interface IProps {}

export const RootRouter: React.FC<IProps> = observer(() => {
  const app = useApp();

  const isSigned = app.controller.applicationStore.isAuth;
  const isInitialized = app.controller.applicationStore.isInitialized;

  if (!isInitialized) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName={SIGN_IN_ROUTE_NAME} screenOptions={{ headerShown: false }}>
      {!isSigned ? (
        <>
          <Stack.Screen name={SIGN_IN_ROUTE_NAME}>
            {() => (
              <MainLayout>
                <SignInScreen />
              </MainLayout>
            )}
          </Stack.Screen>
          <Stack.Screen name={SIGN_UP_ROUTE_NAME}>
            {() => (
              <MainLayout>
                <SignUpScreen />
              </MainLayout>
            )}
          </Stack.Screen>
        </>
      ) : (
        <Stack.Screen name={HOME_GROUP_ROUTE_NAME}>
          {() => (
            <TabsStack.Navigator
              initialRouteName={DASHBOARD_ROUTE_NAME}
              screenOptions={{ headerShown: false }}
              tabBar={(props) => <Tabs {...props} />}
            >
              <TabsStack.Screen name={DASHBOARD_ROUTE_NAME}>
                {() => (
                  <MainLayout>
                    <DashboardScreen />
                  </MainLayout>
                )}
              </TabsStack.Screen>
              <TabsStack.Screen name={PROFILE_ROUTE_NAME}>
                {() => (
                  <MainLayout>
                    <ProfileScreen />
                  </MainLayout>
                )}
              </TabsStack.Screen>
            </TabsStack.Navigator>
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
});
