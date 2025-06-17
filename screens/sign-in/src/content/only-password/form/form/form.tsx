import { FieldWrapper, Caption, Icon, InputMask, Input } from '@library/kit';

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
          render={({ field, fieldState: { error } }) => {
            const hasError = !!error;

            return (
              <FieldWrapper>
                <FieldWrapper.Content>
                  <InputMask
                    mask={'+[0] ([000]) [000]-[00]-[00]'}
                    target={hasError ? 'destructive' : undefined}
                    leadIcon={<Icon icon={'cellphone-line'} />}
                    placeholder={'Номер телефона'}
                    keyboardType="numeric"
                    onChangeText={(value) => field.onChange(value.replace(/\D+/g, ''))}
                    onBlur={field.onBlur}
                  />
                </FieldWrapper.Content>
                {hasError && (
                  <FieldWrapper.Content>
                    <Caption caption={error.message!} state={'destructive'} />
                  </FieldWrapper.Content>
                )}
              </FieldWrapper>
            );
          }}
        />
      </View>
      <View style={[s.field, { marginTop: 16 }]}>
        <Controller
          name={'password'}
          control={control}
          render={({ field, fieldState: { error } }) => {
            const hasError = !!error;

            return (
              <FieldWrapper>
                <FieldWrapper.Content>
                  <Input
                    target={hasError ? 'destructive' : undefined}
                    secureTextEntry={true}
                    leadIcon={<Icon icon={'lock-password-line'} />}
                    placeholder={'Пароль'}
                    keyboardType={'default'}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                  />
                </FieldWrapper.Content>
                {hasError && (
                  <FieldWrapper.Content>
                    <Caption caption={error.message!} state={'destructive'} />
                  </FieldWrapper.Content>
                )}
              </FieldWrapper>
            );
          }}
        />
      </View>
    </View>
  );
};
