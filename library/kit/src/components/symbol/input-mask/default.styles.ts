import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createStyle = (theme: TTheme) => {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 0,
      alignItems: 'center',
      borderCurve: 'circular',
      borderRadius: theme.numbers.radius.xl,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.border.action.normal,
      backgroundColor: theme.colors.background.input.normal,
      overflow: 'hidden',
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
    wrapper_focus: {
      borderColor: theme.colors.border.action.focus,
    },
    wrapper_disabled: {
      borderColor: theme.colors.border.action.disabled,
    },
    leadIcon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 4,
      color: theme.colors.icon.base.primary,
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      paddingRight: 4,
      paddingLeft: 4,
    },
    element: {
      display: 'flex',
      flex: 1,
      paddingVertical: 0,
      paddingHorizontal: 0,
      backgroundColor: 'transparent',
      color: theme.colors.text.base.primary,
      fontFamily: 'GeologicaMedium',
      fontWeight: theme.typography.weight.medium,
      fontSize: theme.typography.fontSize.caption_l,
      lineHeight: theme.typography.lineHeight.caption_l,
      letterSpacing: theme.typography.letterSpacing.caption_l,
    },
    badge: {
      paddingLeft: 4,
      paddingRight: 4,
    },
    tailIcon: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 4,
    },
    icon: {
      color: theme.colors.icon.base.tertiary,
    },
  });
};
