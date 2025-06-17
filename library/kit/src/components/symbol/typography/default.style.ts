import { StyleSheet } from 'react-native';

import { TTheme } from '../../../theme';

export const createFontSize = (
  theme: TTheme,
  size:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body-l'
    | 'body-m'
    | 'body-s'
    | 'caption-l'
    | 'caption-m'
    | 'caption-s',
) => {
  switch (size) {
    case 'h1':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.h1,
          lineHeight: theme.typography.lineHeight.h1,
          letterSpacing: theme.typography.letterSpacing.h1,
        },
      });
    case 'h2':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.h2,
          lineHeight: theme.typography.lineHeight.h2,
          letterSpacing: theme.typography.letterSpacing.h2,
        },
      });
    case 'h3':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.h3,
          lineHeight: theme.typography.lineHeight.h3,
          letterSpacing: theme.typography.letterSpacing.h3,
        },
      });
    case 'h4':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.h4,
          lineHeight: theme.typography.lineHeight.h4,
          letterSpacing: theme.typography.letterSpacing.h4,
        },
      });
    case 'h5':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.h5,
          lineHeight: theme.typography.lineHeight.h5,
          letterSpacing: theme.typography.letterSpacing.h5,
        },
      });
    case 'h6':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.h6,
          lineHeight: theme.typography.lineHeight.h6,
          letterSpacing: theme.typography.letterSpacing.h6,
        },
      });
    case 'body-l':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.body_l,
          lineHeight: theme.typography.lineHeight.body_l,
          letterSpacing: theme.typography.letterSpacing.body_l,
        },
      });
    case 'body-m':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.body_m,
          lineHeight: theme.typography.lineHeight.body_m,
          letterSpacing: theme.typography.letterSpacing.body_m,
        },
      });
    case 'body-s':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.body_s,
          lineHeight: theme.typography.lineHeight.body_s,
          letterSpacing: theme.typography.letterSpacing.body_s,
        },
      });
    case 'caption-l':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.caption_l,
          lineHeight: theme.typography.lineHeight.caption_l,
          letterSpacing: theme.typography.letterSpacing.caption_l,
        },
      });
    case 'caption-m':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.caption_m,
          lineHeight: theme.typography.lineHeight.caption_m,
          letterSpacing: theme.typography.letterSpacing.caption_m,
        },
      });
    case 'caption-s':
      return StyleSheet.create({
        text: {
          fontSize: theme.typography.fontSize.caption_s,
          lineHeight: theme.typography.lineHeight.caption_s,
          letterSpacing: theme.typography.letterSpacing.caption_s,
        },
      });
  }
};

export const createWeightFont = (
  theme: TTheme,
  weight: 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black',
) => {
  switch (weight) {
    case 'light':
      return StyleSheet.create({
        text: {
          fontFamily: 'Geologica-Light',
          fontWeight: theme.typography.weight.light,
        },
      });
    case 'regular':
      return StyleSheet.create({
        text: {
          fontFamily: 'Geologica-Regular',
          fontWeight: theme.typography.weight.regular,
        },
      });
    case 'medium':
      return StyleSheet.create({
        text: {
          fontFamily: 'Geologica-Medium',
          fontWeight: theme.typography.weight.medium,
        },
      });
    case 'semi-bold':
      return StyleSheet.create({
        text: {
          fontFamily: 'Geologica-SemiBold',
          fontWeight: theme.typography.weight.semi_bold,
        },
      });
    case 'bold':
      return StyleSheet.create({
        text: {
          fontFamily: 'Geologica-Bold',
          fontWeight: theme.typography.weight.bold,
        },
      });
    case 'extra-bold':
      return StyleSheet.create({
        text: {
          fontFamily: 'Geologica-ExtraBold',
          fontWeight: theme.typography.weight.extra_bold,
        },
      });
    case 'black':
      return StyleSheet.create({
        text: {
          fontFamily: 'Geologica-Black',
          fontWeight: theme.typography.weight.black,
        },
      });
  }
};
