import React from 'react';
import { ContainerModule } from 'inversify';
import { useFocusEffect } from '@react-navigation/native';

import { useApp } from './app.hook.ts';

export const useConnectContainerModule = (module: ContainerModule) => {
  const { container } = useApp();
  const [isLoaded, setLoaded] = React.useState(false);

  useFocusEffect(() => {
    container.load(module).then(() => setLoaded(true));
    return () => {
      container.unload(module).then(() => setLoaded(false));
    };
  });

  if (!isLoaded) {
    return null;
  }

  return container;
};
