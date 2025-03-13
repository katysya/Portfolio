import { useTheme } from '@/shared/lib/theme';
import { TextLabel } from '@/shared/ui';
import { Navigation } from '../../Navigation';

import './Header.scss';

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header className={`header ${isDark ? '_dark' : '_light'}`}>
      <div className="container">
        <div className="header__container">
          <TextLabel
            primaryText="Федякина"
            secondaryText="Екатерина"
            active={false}
          ></TextLabel>
          <div className="header__navigation">
            <Navigation />
          </div>
          <TextLabel
            primaryText="Frontend"
            secondaryText="Developer"
            active={true}
          ></TextLabel>
        </div>
      </div>
    </header>
  );
};

export default Header;
