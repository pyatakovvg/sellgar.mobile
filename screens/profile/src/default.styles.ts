import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flex: 1,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: theme.colors.text.base.primary,
    },
  });
};
