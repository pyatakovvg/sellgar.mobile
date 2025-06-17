import { useTheme, Typography } from '@library/kit';

import React from 'react';
import { View, Text } from 'react-native';

import { createStyles } from './default.styles.ts';

export const Error = (props: any) => {
  const { theme } = useTheme();

  const baseStyles = createStyles(theme);

  return (
    <View style={baseStyles.wrapper}>
      <View>
        <Typography size={'body-m'} weight={'regular'}>
          <Text style={baseStyles.title}>Something happened!</Text>
        </Typography>
      </View>
      <View>
        <Typography size={'caption-m'} weight={'medium'}>
          <Text style={baseStyles.text}>{props.error.toString()}</Text>
        </Typography>
      </View>
    </View>
  );
};
