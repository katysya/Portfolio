import '../app/styles/global.scss';
import { Button } from '../shared/ui';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`${isDark ? 'dark' : 'light'}`}>
      <Button></Button>
    </div>
  );
}

export default App;
