import React from 'react';
import { View } from 'react-native';
import { FormProvider, useForm } from 'react-hook-form';

import { Content } from './content';

import s from './default.styles.ts';

export const SignUpScreen: React.FC = () => {
  const methods = useForm<any>();

  return (
    <FormProvider {...methods}>
      <View style={s.wrapper}>
        <View style={s.content}>
          <Content />
        </View>
      </View>
    </FormProvider>
  );
};
