import '../app/styles/global.scss';
import { Button, Switcher } from '../shared/ui';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Button></Button>
      <Switcher></Switcher>
    </div>
  );
}

export default App;
