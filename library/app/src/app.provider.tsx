import React from 'react';

import { Provider } from './app.context.ts';
import { container } from './classes/classes.di.ts';
import { NavigationContainerRef, ParamListBase } from '@react-navigation/native';

import { ApplicationControllerInterface } from './classes/controller/application-controller.interface.ts';

interface IProps {
  navigationRef: React.RefObject<NavigationContainerRef<ParamListBase>>;
}

export const ApplicationProvider: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const [controller] = React.useState(() => container.get(ApplicationControllerInterface));

  return (
    <Provider
      value={{
        navigationRef: props.navigationRef,
        container,
        controller,
      }}
    >
      {props.children}
    </Provider>
  );
};
