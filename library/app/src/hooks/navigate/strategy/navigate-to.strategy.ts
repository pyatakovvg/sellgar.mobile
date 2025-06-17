import React from 'react';
import { CommonActions, NavigationContainerRef, ParamListBase } from '@react-navigation/native';

export const navigateToStrategy = (
  navigationRef: React.RefObject<NavigationContainerRef<ParamListBase>>,
  path: string,
  params: any,
) => {
  // Разбиваем путь на части (например: "main/profile/edit" -> ["main", "profile", "edit"])
  const pathParts = path.split('/');

  // Если путь содержит вложенность (больше одной части)
  if (pathParts.length > 1) {
    // Строим объект навигации рекурсивно
    const nestedAction = pathParts.reduceRight<{
      name: string;
      params?: any;
      state?: any;
    }>((acc, part, index) => {
      if (index === pathParts.length - 1) {
        return { name: part, params };
      }
      return {
        name: part,
        state: {
          routes: [acc],
        },
      };
    }, {} as any);

    navigationRef.current.dispatch(CommonActions.navigate(nestedAction));
  } else {
    // Простой переход без вложенности
    navigationRef.current.dispatch(CommonActions.navigate(path, params));
  }
};
