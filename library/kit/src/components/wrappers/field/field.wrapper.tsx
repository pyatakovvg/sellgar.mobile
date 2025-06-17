import React from 'react';
import { View } from 'react-native';

import { createStyle } from './default.styles.ts';

const Label: React.FC<React.PropsWithChildren> = (props) => {
  const baseStyles = React.useMemo(() => createStyle(), []);

  return <View style={[baseStyles.label]}>{props.children}</View>;
};

const Content: React.FC<React.PropsWithChildren> = (props) => {
  const baseStyles = React.useMemo(() => createStyle(), []);

  return <View style={[baseStyles.content]}>{props.children}</View>;
};

const Caption: React.FC<React.PropsWithChildren> = (props) => {
  const baseStyles = React.useMemo(() => createStyle(), []);

  return <View style={[baseStyles.caption]}>{props.children}</View>;
};

const FieldWrapperComponent: React.FC<React.PropsWithChildren> = (props) => {
  const baseStyles = React.useMemo(() => createStyle(), []);

  return (
    <View style={[baseStyles.wrapper]}>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return child;
        }
        return null;
      })}
    </View>
  );
};

type TFieldWrapper = typeof FieldWrapperComponent & {
  Label: typeof Label;
  Content: typeof Content;
  Caption: typeof Caption;
};

export const FieldWrapper = Object.assign(FieldWrapperComponent, {
  Label,
  Content,
  Caption,
}) as TFieldWrapper;
