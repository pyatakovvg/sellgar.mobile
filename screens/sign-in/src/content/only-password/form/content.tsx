import { Button, ContainerWrapper, Divider } from '@library/kit';
import { SIGN_UP_ROUTE_NAME } from '@screen/sign-up';

import React from 'react';
import { View, Alert } from 'react-native';
import { useFormContext } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Header } from './header';
import { Form } from './form';

import { context } from '../../../sign-in.context.ts';

import s from './default.styles.ts';

export const Content = () => {
  const { controller } = React.useContext(context);

  const { handleSubmit } = useFormContext();

  const navigation = useNavigation();

  const handleSignIn = handleSubmit(async (data) => {
    try {
      await controller.signInByCredentials(data.login, data.password);
    } catch (error) {
      Alert.alert('Error', (error as any).message);
    }
  });

  const handleSignUp = async () => {
    // @ts-ignore
    navigation.navigate(SIGN_UP_ROUTE_NAME);
  };

  return (
    <ContainerWrapper>
      <View style={s.wrapper}>
        <View style={s.header}>
          <Header />
        </View>
        <View style={s.content}>
          <Form />
        </View>
        <View style={s.control}>
          <Button target={'info'} onPress={handleSignIn}>
            Авторизоваться
          </Button>
        </View>
        <View style={{ paddingTop: 16, paddingBottom: 16 }}>
          <Divider type={'label-center'} label={'или'} />
        </View>
        <View>
          <Button style={'tertiary'} onPress={handleSignUp}>
            Регистрация
          </Button>
        </View>
      </View>
    </ContainerWrapper>
  );
};
