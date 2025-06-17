import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../../theme';

export const createStateStyle = (theme: TTheme, checked?: boolean) => {
  return StyleSheet.create({
    wrapper: {
      borderColor: checked ? theme.colors.border.base.surface : theme.colors.border.action.normal,
      borderWidth: checked ? 0 : 1,
      backgroundColor: checked ? theme.colors.background.checkbox.checked : theme.colors.background.checkbox.default,
    },
    icon: {
      color: theme.colors.border.base.surface,
    },
  });
};
