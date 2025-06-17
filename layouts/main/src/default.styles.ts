import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flex: 1,
      backgroundColor: theme.colors.background.surface.neutral,
    },
  });
};
