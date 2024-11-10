import { TextLabel } from '../../shared/ui/index';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <TextLabel
            primaryText="Федякина"
            secondaryText="Екатерина"
            active={false}
          ></TextLabel>
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
