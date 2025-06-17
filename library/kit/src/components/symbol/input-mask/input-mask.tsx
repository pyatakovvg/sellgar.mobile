import React from 'react';
import { View, TextProps, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-advanced-input-mask';

import { context } from '../../../theme/theme.context.ts';

import { createStyle } from './default.styles.ts';
import { createSizeStyle } from './styles/size/size.style.ts';
import { createTargetStyle } from './styles/target/target.style.ts';
import { createDisabledStyle } from './styles/disabled/disabled.style.ts';

export interface IProps extends Omit<MaskedTextInputProps, 'size' | 'style'> {
  size?: 'xs' | 'md';
  target?: 'destructive';
  badge?: React.ReactNode;
  leadIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
  disabled?: boolean;
}

export const InputMask: React.FC<IProps> = React.forwardRef(
  ({ disabled, size = 'md', target, leadIcon, tailIcon, badge, ...props }, ref) => {
    const textInputRef = React.useRef(null);

    const { theme } = React.useContext(context);

    const [isFocused, setFocused] = React.useState(false);

    const baseStyles = React.useMemo(() => createStyle(theme), [theme]);
    const sizeStyles = React.useMemo(() => createSizeStyle(size), [size]);
    const disabledStyles = React.useMemo(() => createDisabledStyle(theme), [theme]);
    const targetStyles = React.useMemo(() => createTargetStyle(theme, target), [theme, target]);

    React.useImperativeHandle(ref, () => textInputRef.current!);

    React.useEffect(() => {
      if (isFocused && disabled) {
        setFocused(false);
      }
    }, [disabled]);

    const handleFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);
      props.onFocus && props.onFocus(event);
    };

    const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);
      props.onBlur && props.onBlur(event);
    };

    return (
      <View
        style={[
          baseStyles.wrapper,
          sizeStyles.wrapper,
          targetStyles.wrapper,
          isFocused && baseStyles.wrapper_focus,
          disabled && disabledStyles.wrapper,
        ]}
      >
        {leadIcon && (
          <View style={[baseStyles.leadIcon, sizeStyles.leadIcon]}>
            {React.Children.map(leadIcon, (child) => {
              if (React.isValidElement(child)) {
                const cloneElement = child as React.ReactElement<TextProps, any>;
                return React.cloneElement(cloneElement, {
                  style: [baseStyles.icon, sizeStyles.icon, disabled && disabledStyles.icon],
                });
              }
              return null;
            })}
          </View>
        )}
        <View style={baseStyles.content}>
          <MaskedTextInput
            {...props}
            ref={textInputRef}
            style={[baseStyles.element, sizeStyles.element, disabled && disabledStyles.element]}
            editable={!disabled}
            multiline={false}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        {badge && (
          <View style={[baseStyles.badge]}>
            {React.Children.map(badge, (child) => {
              if (React.isValidElement(child)) {
                const cloneElement = child as React.ReactElement<any, any>;
                return React.cloneElement(cloneElement, {
                  disabled,
                  size: 'sm',
                  color: 'gray',
                });
              }
              return null;
            })}
          </View>
        )}
        {tailIcon && (
          <View style={[baseStyles.tailIcon, sizeStyles.tailIcon]}>
            {React.Children.map(tailIcon, (child) => {
              if (React.isValidElement(child)) {
                const cloneElement = child as React.ReactElement<any, any>;
                return React.cloneElement(cloneElement, {
                  style: [baseStyles.icon, sizeStyles.icon, disabled && disabledStyles.icon],
                });
              }
              return null;
            })}
          </View>
        )}
      </View>
    );
  },
);
