import { useTheme } from '../../../src/context/ThemeContext';

import './style.scss';

const Button = () => {
  const { isDark } = useTheme();
  return (
    <button className={`button ${isDark ? 'dark' : 'light'}`}>
      button
    </button>
  );
};

export default Button;
