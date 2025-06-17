import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      borderRadius: theme.numbers.radius.xxl,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.border.action.normal,
      backgroundColor: theme.colors.background.surface.default,
      // для ios
      shadowColor: 'rgba(20, 21, 26, 0.2)',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowRadius: 2,
      shadowOpacity: 0.2,
      // для android
      elevation: 2,
    },
  });
};
