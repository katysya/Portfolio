import { useContext } from 'react';
import { ThemeContext } from './ThemeContex';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('context error');
  }

  return context;
};
