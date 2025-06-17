import { useTheme } from '@library/kit';

import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createStyles } from './default.styles.ts';

interface IProps {}

export const MainLayout: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const baseStyles = createStyles(theme);

  return (
    <View
      style={[
        baseStyles.wrapper,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.right + 16,
          paddingRight: insets.right + 16,
        },
      ]}
    >
      {props.children}
    </View>
  );
};
