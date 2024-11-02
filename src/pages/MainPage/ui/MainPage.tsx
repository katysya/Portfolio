import { Switcher } from '../../../shared/ui';
import { useTheme } from '../../../../app/Context/ThemeContext';

import '../../../../app/styles/global.scss';

function MainPage() {
  const { isDark } = useTheme();
  return (
    <div className={`main-page ${isDark ? 'dark' : 'light'}`}>
      <Switcher></Switcher>
    </div>
  );
}

export default MainPage;
