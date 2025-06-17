import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createStyleStyle = (theme: TTheme, style: 'primary' | 'secondary' | 'tertiary' | 'ghost') => {
  switch (style) {
    case 'secondary':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.button.secondary,
        },
        text: {
          color: theme.colors.text.base.primary,
        },
        icon: {
          color: theme.colors.icon.base.primary,
        },
      });
    case 'tertiary':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.button.tertiary,
        },
        text: {
          color: theme.colors.text.base.primary,
        },
        icon: {
          color: theme.colors.icon.base.primary,
        },
      });
    case 'ghost':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.button.ghost,
        },
        text: {
          color: theme.colors.text.base.primary,
        },
        icon: {
          color: theme.colors.text.base.primary,
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.button.primary,
        },
        text: {
          color: theme.colors.text.base.inverted,
        },
        icon: {
          color: theme.colors.icon.base.inverted,
        },
      });
  }
};
