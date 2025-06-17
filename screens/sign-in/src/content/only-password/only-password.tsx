import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { Content } from './form';

import { schema } from './form.schema.ts';

interface IProps {}

interface IForm {
  login: string;
  password: string;
}

export const OnlyPassword: React.FC<IProps> = () => {
  const methods = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <Content />
    </FormProvider>
  );
};
