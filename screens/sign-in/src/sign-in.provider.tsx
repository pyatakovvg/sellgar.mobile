import React from 'react';

import { Provider } from './sign-in.context.ts';
import { SignInControllerInterface } from './classes/controller/sign-in-controller.interface.ts';

interface IProps {
  controller: SignInControllerInterface;
}

export const SignInProvider: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  return (
    <Provider
      value={{
        controller: props.controller,
      }}
    >
      {props.children}
    </Provider>
  );
};
