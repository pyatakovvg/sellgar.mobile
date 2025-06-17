import React from 'react';
import { View } from 'react-native';

import { context } from '../../../theme/theme.context.ts';

import { createStyle } from './default.styles.ts';

interface IProps {}

export const ContainerWrapper: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const { theme } = React.useContext(context);

  const baseStyles = React.useMemo(() => createStyle(theme), [theme]);

  return <View style={[baseStyles.wrapper]}>{props.children}</View>;
};
