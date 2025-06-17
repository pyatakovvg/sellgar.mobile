import React from 'react';
import { View } from 'react-native';
import { Container } from 'inversify';

import { Content } from './content';
import { SignInProvider } from './sign-in.provider.tsx';

import { containerModule } from './classes/classes.di.ts';
import { SignInControllerInterface } from './classes/controller/sign-in-controller.interface.ts';

import s from './default.styles.ts';

export class ClassModule {
  constructor(container: Container) {
    container.loadSync(containerModule);
  }

  destructor(container: Container) {
    container.unloadSync(containerModule);
  }

  render({ container }: { container: Container }) {
    return (
      <SignInProvider controller={container.get(SignInControllerInterface)}>
        <View style={s.wrapper}>
          <View style={s.content}>
            <Content />
          </View>
        </View>
      </SignInProvider>
    );
  }
}
