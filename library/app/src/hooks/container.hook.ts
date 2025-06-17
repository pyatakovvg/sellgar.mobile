import { useApp } from './app.hook.ts';

export const useContainer = () => {
  const { container } = useApp();

  return container;
};
