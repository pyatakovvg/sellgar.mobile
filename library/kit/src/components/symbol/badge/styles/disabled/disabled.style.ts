import { StyleSheet } from 'react-native';

import { TTheme } from '../../../../../theme';

export const createDisabledStyle = (
  theme: TTheme,
  color:
    | 'gray'
    | 'blue'
    | 'green'
    | 'red'
    | 'orange'
    | 'purple'
    | 'white'
    | 'surface'
    | 'white-destructive'
    | 'surface-destructive',
) => {
  switch (color) {
    case 'blue':
      return StyleSheet.create({
        wrapper: {},
        text: {
          color: theme.colors.text.accent.blue_secondary,
        },
        icon: {
          color: theme.colors.icon.accent.blue_secondary,
        },
      });
    case 'green':
      return StyleSheet.create({
        wrapper: {},
        text: {
          color: theme.colors.text.accent.green_secondary,
        },
        icon: {
          color: theme.colors.icon.accent.green_secondary,
        },
      });
    case 'red':
      return StyleSheet.create({
        wrapper: {},
        text: {
          color: theme.colors.text.accent.red_secondary,
        },
        icon: {
          color: theme.colors.icon.accent.red_secondary,
        },
      });
    case 'purple':
      return StyleSheet.create({
        wrapper: {},
        text: {
          color: theme.colors.text.accent.purple_secondary,
        },
        icon: {
          color: theme.colors.icon.accent.purple_secondary,
        },
      });
    case 'orange':
      return StyleSheet.create({
        wrapper: {},
        text: {
          color: theme.colors.text.accent.orange_secondary,
        },
        icon: {
          color: theme.colors.icon.accent.orange_secondary,
        },
      });
    case 'white':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.white_disabled,
        },
        text: {
          color: theme.colors.text.base.quaternary,
        },
        icon: {
          color: theme.colors.icon.base.quaternary,
        },
      });
    case 'white-destructive':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.white_disabled,
        },
        text: {
          color: theme.colors.text.status.destructive_tertiary,
        },
        icon: {
          color: theme.colors.icon.status.destructive_tertiary,
        },
      });
    case 'surface':
      return StyleSheet.create({
        wrapper: {},
        text: {
          color: theme.colors.text.base.quaternary,
        },
        icon: {
          color: theme.colors.icon.base.quaternary,
        },
      });
    case 'surface-destructive':
      return StyleSheet.create({
        wrapper: {
          backgroundColor: theme.colors.background.badge.surface,
        },
        text: {
          color: theme.colors.text.status.destructive_tertiary,
        },
        icon: {
          color: theme.colors.icon.status.destructive_tertiary,
        },
      });
    default:
      return StyleSheet.create({
        wrapper: {},
        text: {
          color: theme.colors.text.base.quaternary,
        },
        icon: {
          color: theme.colors.icon.base.quaternary,
        },
      });
  }
};
