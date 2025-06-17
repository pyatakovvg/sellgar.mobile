import { useApp } from '@library/app';
import { useTheme, Button, Typography, Icon } from '@library/kit';

import React from 'react';
import { Text, View } from 'react-native';

import { createStyles } from './default.styles.ts';

export class ClassModule {
  constructor() {}

  destructor() {}

  loader() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 3000);
    });
  }

  render() {
    const app = useApp();
    const { theme, toggleColorScheme, colorScheme } = useTheme();

    const s = React.useMemo(() => createStyles(theme), [theme]);

    return (
      <View style={s.wrapper}>
        <View style={{ flex: 0, justifyContent: 'center' }}>
          <Button target={'success'} onPress={() => toggleColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>
            Сменить тему
          </Button>
        </View>
        <View style={s.content}>
          <Typography size={'body-s'} weight={'black'}>
            <Text style={s.text} ellipsizeMode={'tail'} numberOfLines={1}>
              Страница профайла пользователя!
            </Text>
          </Typography>
        </View>
        <View style={{ marginTop: 16 }}>
          <Button
            target={'destructive'}
            leadIcon={<Icon icon={'logout-box-line'} />}
            onPress={() => app.controller.signOut()}
          >
            Выйти из приложения
          </Button>
        </View>
      </View>
    );
  }
}
