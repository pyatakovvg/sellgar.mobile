import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStateStyles = (theme: TTheme) => {
  return StyleSheet.create({
    text: {
      color: theme.colors.text.accent.blue_accent,
    },
    icon: {
      color: theme.colors.icon.accent.blue_accent,
    },
  });
};
