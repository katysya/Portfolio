import { Link } from 'react-router-dom';
import { Icon } from '../../../shared/ui';

import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/about">
            <Icon name="Telegram" size={30} color="pink" />
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/about">About</Link>
        </li>
        <li className="navigation__item">
          <Link to="/about">Projects</Link>
        </li>
        <li className="navigation__item">
          <Link to="/about">Contact me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
