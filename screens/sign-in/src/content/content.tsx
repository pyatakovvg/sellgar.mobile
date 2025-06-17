import { useApp } from '@library/app';

import React from 'react';

import { OnlyPassword } from './only-password';

interface IProps {}

export const Content: React.FC<IProps> = () => {
  const app = useApp();

  if (app.controller.applicationStore.authStep === 'APPLICATION_AUTH_STEP_ONLY_PASSWORD') {
    return <OnlyPassword />;
  }
};
