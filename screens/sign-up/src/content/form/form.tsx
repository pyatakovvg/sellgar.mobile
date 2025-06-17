import { FieldWrapper, Icon, Input } from '@library/kit';

import React from 'react';
import { View } from 'react-native';
import { useFormContext, Controller } from 'react-hook-form';

import s from './default.styles.ts';

export const Form = () => {
  const { control } = useFormContext();

  return (
    <View style={s.wrapper}>
      <View style={s.field}>
        <Controller
          name={'login'}
          control={control}
          render={({ field }) => {
            return (
              <FieldWrapper>
                <FieldWrapper.Content>
                  <Input
                    leadIcon={<Icon icon={'cellphone-line'} />}
                    placeholder={'Номер телефона'}
                    keyboardType="default"
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                  />
                </FieldWrapper.Content>
              </FieldWrapper>
            );
          }}
        />
      </View>
      <View style={[s.field, { marginTop: 16 }]}>
        <Controller
          name={'password'}
          control={control}
          render={({ field }) => {
            return (
              <FieldWrapper>
                <FieldWrapper.Content>
                  <Input
                    secureTextEntry={true}
                    leadIcon={<Icon icon={'lock-password-line'} />}
                    placeholder={'Пароль'}
                    keyboardType={'default'}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                  />
                </FieldWrapper.Content>
              </FieldWrapper>
            );
          }}
        />
      </View>
      <View style={[s.field, { marginTop: 16 }]}>
        <Controller
          name={'password'}
          control={control}
          render={({ field }) => {
            return (
              <FieldWrapper>
                <FieldWrapper.Content>
                  <Input
                    secureTextEntry={true}
                    leadIcon={<Icon icon={'lock-password-line'} />}
                    placeholder={'Подтвердить пароль'}
                    keyboardType={'default'}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                  />
                </FieldWrapper.Content>
              </FieldWrapper>
            );
          }}
        />
      </View>
    </View>
  );
};
