import { Typography, useTheme } from '@library/kit';

import React from 'react';
import { View, Text } from 'react-native';

import { createStyles } from './default.styles.ts';

export const Header = () => {
  const { theme } = useTheme();

  const baseStyles = createStyles(theme);

  return (
    <View style={baseStyles.wrapper}>
      <View style={baseStyles.header}>
        <Typography size={'h6'} weight={'medium'}>
          <Text style={baseStyles.header_text}>Регистрация</Text>
        </Typography>
      </View>
      <View style={baseStyles.description}>
        <Typography size={'body-s'} weight={'regular'}>
          <Text style={baseStyles.description_text}>
            Введите номер телефона, который вы использовали при регистрации
          </Text>
        </Typography>
      </View>
    </View>
  );
};
