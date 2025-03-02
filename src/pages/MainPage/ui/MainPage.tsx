import { Header } from '../../../widgets/Header/index';
import { Footer } from '../../../widgets/Footer/index';
import { AnimatedRoutes } from '../../../../app/providers/router';

import { useTheme } from '../../../../app/Context/ThemeContext';

import './MainPage.scss';

const MainPage = () => {
  const { isDark } = useTheme();

  return (
    <div className={`main-page ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
};

export default MainPage;
