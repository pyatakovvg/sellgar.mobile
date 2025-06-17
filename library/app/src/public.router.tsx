import React from 'react';
import { Text } from 'react-native';
import { observer } from 'mobx-react';
import { useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screen } from './screen.tsx';
import { useApp } from './hooks/app.hook.ts';

interface IOptions {
  screens: Screen[];
}

interface IWrapperProps {
  screen: any;
}

const Wrapper: React.FC<IWrapperProps> = observer((props) => {
  const { container, controller } = useApp();
  const [focused, setFocused] = React.useState(false);
  const [inProcess, setProcess] = React.useState(true);
  const [instance, setInstance] = React.useState<any>(null);

  useFocusEffect(() => {
    setFocused(true);
    return () => {
      setFocused(false);
    };
  });

  React.useEffect(() => {
    const create = async (module: any) => {
      if (module.loader) {
        await module.loader(container);
      }

      if (!controller.applicationStore.isInitialized) {
        controller.setInitialized();
      }

      setProcess(false);
    };

    if (focused) {
      setProcess(true);

      const module = props.screen.create(container);

      setInstance(module);

      create(module);

      return () => {
        setProcess(false);
        module.destructor(container);
      };
    }
  }, [focused]);

  if (!controller.applicationStore.isInitialized || !instance) {
    return null;
  }

  if (inProcess) {
    return <Text>Loading public</Text>;
  }

  return <instance.render container={container} />;
});

export class PublicRouter {
  readonly routeName: string = 'public';

  constructor(private readonly options: IOptions) {}

  async createView() {
    const screens: any = {};

    for (const screen of this.options.screens) {
      if (screen.name in screens) {
        throw Error('Route "' + screen.name + '" already exist in public router');
      }

      await screen.loadModule();

      screens[screen.name] = () => <Wrapper screen={screen} />;
    }

    return createNativeStackNavigator({
      screenOptions: {
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      },
      screens,
    });
  }
}
