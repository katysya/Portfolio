import { useTheme } from '../../../src/context/ThemeContext';

const Button = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      className={`${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
    >
      button
    </button>
  );
};

export default Button;
