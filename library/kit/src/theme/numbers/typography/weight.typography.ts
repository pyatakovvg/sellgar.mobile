import { TextStyle } from 'react-native';

type WeightName = 'light' | 'regular' | 'medium' | 'semi_bold' | 'bold' | 'extra_bold' | 'black';

export const weightTypography = {
  light: 200,
  regular: 300,
  medium: 400,
  semi_bold: 500,
  bold: 600,
  extra_bold: 700,
  black: 900,
} as Record<WeightName, TextStyle['fontWeight']>;
