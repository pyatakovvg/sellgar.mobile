import { type TTheme } from '@library/kit';

import { StyleSheet } from 'react-native';

export const createStyles = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      borderTopWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.border.base.divider,
      backgroundColor: theme.colors.background.surface.default,
    },
    tab: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      alignItems: 'center',
      paddingTop: 16,
      paddingBottom: 8,
    },
    tab_icon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
    },
    tab_label: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      marginTop: 4,
    },
    text: {
      color: theme.colors.text.base.primary,
    },
    icon: {
      color: theme.colors.icon.base.primary,
    },
  });
};
