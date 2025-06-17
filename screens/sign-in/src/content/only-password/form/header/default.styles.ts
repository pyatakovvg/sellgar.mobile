import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    wrapper: {},
    header: {},
    header_text: {
      textAlign: 'center',
      color: theme.colors.text.base.primary,
    },
    description: {
      marginTop: 8,
    },
    description_text: {
      textAlign: 'center',
      color: theme.colors.text.base.secondary,
    },
  });
