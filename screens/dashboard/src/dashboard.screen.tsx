import { useTheme, Button, Typography, Icon, Checkbox, Badge, FieldWrapper, Input, Label, Caption } from '@library/kit';
import { SCREEN_NAME } from '@screen/profile';
import { useNavigate } from '@library/app';

import React from 'react';
import { Text, View } from 'react-native';

import { createStyles } from './default.styles.ts';

export class ClassModule {
  constructor() {
    console.log('ClassModule dashboard constructor');
  }

  destructor() {
    console.log('ClassModule dashboard destructor');
  }

  loader() {
    console.log('ClassModule dashboard loader');
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 3000);
    });
  }

  render() {
    const { theme, toggleColorScheme, colorScheme } = useTheme();

    const navigation = useNavigate();

    const s = React.useMemo(() => createStyles(theme), [theme]);

    return (
      <View style={s.wrapper}>
        <View>
          <Icon style={{ color: theme.colors.icon.base.primary, fontSize: 40 }} icon={'blaze-fill'} />
        </View>
        <View style={s.content}>
          <FieldWrapper>
            <FieldWrapper.Label>
              <Label label={'Поле ввода'} caption={'(Какое-то описание)'} required={true} />
            </FieldWrapper.Label>
            <FieldWrapper.Content>
              <Input
              // value={value}
              // onChangeText={setValue}
              // leadIcon={<Icon icon={'account-box-fill'} />}
              // tailIcon={<Icon icon={'account-circle-line'} />}
              // badge={
              //   <Badge
              //     label={'KZ'}
              //     leadIcon={<Icon icon={'account-box-fill'} />}
              //     tailIcon={<Icon icon={'account-circle-line'} />}
              //   />
              // }
              />
            </FieldWrapper.Content>
            <FieldWrapper.Caption>
              <Caption leadIcon={<Icon icon={'information-line'} />} caption={'Необходимо заполнить'} />
            </FieldWrapper.Caption>
          </FieldWrapper>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button target={'success'} onPress={() => toggleColorScheme(colorScheme === 'light' ? 'dark' : 'light')}>
            Сменить тему
          </Button>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 0,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View>
            <Checkbox size={'md'} checked={true} />
            <Checkbox size={'md'} checked={false} disabled={true} />
            <Checkbox size={'md'} checked={true} label={'Нажми меня'} />
            <Checkbox size={'md'} label={'Нажми меня'} checked={false} disabled={true} />
            <Checkbox size={'md'} label={'Нажми меня'} checked={true} caption={'Нажми для смены состояния'} />
            <Checkbox size={'md'} label={'Нажми меня'} checked={false} caption={'Нажми для смены состояния'} />
          </View>
          <View>
            <Badge
              size={'lg'}
              label={'KZ'}
              color={'purple'}
              leadIcon={<Icon icon={'account-box-fill'} />}
              tailIcon={<Icon icon={'account-circle-line'} />}
            />
          </View>
        </View>
        <View style={s.content}>
          <Typography size={'body-s'} weight={'black'}>
            <Text style={s.text} ellipsizeMode={'tail'} numberOfLines={1}>
              Нажми на кнопку для перехода на тест!
            </Text>
          </Typography>
        </View>
        <View style={{ marginTop: 16 }}>
          <Button
            tailIcon={<Icon icon={'arrow-right-line'} />}
            onPress={() => navigation.navigateTo('private/' + SCREEN_NAME)}
          >
            Нажми меня
          </Button>
        </View>
      </View>
    );
  }
}
