import React from 'react';
import { StyleSheet } from 'react-native';

import { context } from '../../../theme/theme.context.ts';

import { createFontSize, createWeightFont } from './default.style.ts';

interface IProps {
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
    | 'caption-s';
  weight: 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black';
}

export const Typography: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const { theme } = React.useContext(context);

  const fontSizeStyle = React.useMemo(() => createFontSize(theme, props.size), [theme, props.size]);
  const fontWeightStyle = React.useMemo(() => createWeightFont(theme, props.weight), [theme, props.weight]);

  const styles = React.useMemo(
    () => StyleSheet.flatten([fontSizeStyle.text, fontWeightStyle.text]),
    [fontSizeStyle, fontWeightStyle],
  );

  return React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      const cloneElement = child as React.ReactElement<any, any>;

      return React.cloneElement(cloneElement, {
        style: [cloneElement.props?.style, styles],
      });
    }
    return child;
  });
};
