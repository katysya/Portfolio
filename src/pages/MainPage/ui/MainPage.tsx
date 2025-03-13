import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { AnimatedRoutes } from '@/app/providers/router';

import { useTheme } from '@/shared/lib/theme';

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
