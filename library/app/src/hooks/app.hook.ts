import React from 'react';

import { context } from '../app.context.ts';

export const useApp = () => {
  return React.useContext(context);
};
