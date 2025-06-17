import { useTheme, Icon, iconMap, Typography } from '@library/kit';

import { PROFILE_ROUTE_NAME } from '@screen/profile';
import { DASHBOARD_ROUTE_NAME } from '@screen/dashboard';

import React from 'react';
import { View, Text } from 'react-native';
import { PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createStyles } from './default.styles.ts';
import { createStateStyles } from './styles/state.styles.ts';

const TabIcon = {
  [DASHBOARD_ROUTE_NAME]: 'home-2-fill',
  [PROFILE_ROUTE_NAME]: 'user-2-fill',
} as Record<string, keyof typeof iconMap>;

const TabLabel = {
  [DASHBOARD_ROUTE_NAME]: 'Главная',
  [PROFILE_ROUTE_NAME]: 'Профиль',
} as Record<string, string>;

export const Tabs: React.FC<BottomTabBarProps> = (props) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const baseStylesColor = React.useMemo(() => createStyles(theme), [theme]);
  const stateStylesColor = React.useMemo(() => createStateStyles(theme), [theme]);

  return (
    <View style={[baseStylesColor.wrapper, { paddingBottom: insets.bottom }]}>
      {props.state.routes.map((route, index) => {
        const { options } = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            renderToHardwareTextureAndroid={true}
            key={route.key}
            testID={options.tabBarButtonTestID}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityState={isFocused ? { selected: true } : {}}
            android_ripple={{ color: 'transparent' }}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ display: 'flex', flexDirection: 'row', flex: 1 }}
          >
            <View style={baseStylesColor.tab}>
              <View style={baseStylesColor.tab_icon}>
                <Icon style={[baseStylesColor.icon, isFocused && stateStylesColor.icon]} icon={TabIcon[route.name]} />
              </View>
              <View style={baseStylesColor.tab_label}>
                <Typography size={'caption-m'} weight={'medium'}>
                  <Text style={[baseStylesColor.text, isFocused && stateStylesColor.text]}>
                    {TabLabel[label as string]}
                  </Text>
                </Typography>
              </View>
            </View>
          </PlatformPressable>
        );
      })}
    </View>
  );
};
