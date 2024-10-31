import { Button, Switcher } from '../../shared/ui/index';
import { useTheme } from '../../src/context/ThemeContext';

import '../../app/styles/global.scss';
import './style.scss';

function Index() {
  const { isDark } = useTheme();
  return (
    <div className={`index ${isDark ? 'dark' : 'light'}`}>
      <Button></Button>
      <Switcher></Switcher>
    </div>
  );
}

export default Index;
