import { useApp } from '@library/app';
import { Button, ContainerWrapper, Divider } from '@library/kit';
import { SIGN_IN_ROUTE_NAME } from '@screen/sign-in';

import React from 'react';
import { View, Alert } from 'react-native';
import { useFormContext } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Header } from './header';
import { Form } from './form';

import s from './default.styles.ts';

export const Content = () => {
  const app = useApp();
  const { handleSubmit } = useFormContext();

  const navigation = useNavigation();

  const handleSignUp = handleSubmit(async (data) => {
    try {
      await app.controller.signIn(data.login, data.password);
    } catch (error) {
      Alert.alert('Error', (error as any).message);
    }
  });

  const handleSignIn = () => {
    // @ts-ignore
    navigation.navigate(SIGN_IN_ROUTE_NAME);
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
          <Button target={'info'} onPress={handleSignUp}>
            Зарегистрировать
          </Button>
        </View>
        <View style={{ paddingTop: 16, paddingBottom: 16 }}>
          <Divider />
        </View>
        <View>
          <Button style={'tertiary'} onPress={handleSignIn}>
            Авторизация
          </Button>
        </View>
      </View>
    </ContainerWrapper>
  );
};
