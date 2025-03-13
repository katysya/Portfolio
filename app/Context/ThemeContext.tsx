import {
  useState,
  ReactNode,
  createContext,
  useContext,
  FC,
} from 'react';

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('context error');
  }

  return context;
};

interface ThemeProvider {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProvider> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
