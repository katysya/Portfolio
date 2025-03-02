import { Link } from 'react-router-dom';
import { Icon, Switcher } from '../../../shared/ui';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__icon">
            <Icon name="Home" size={22} color="white" />
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/about">
            About
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/projects">
            Projects
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/contact">
            Contact me
          </Link>
        </li>
        <Switcher />
      </ul>
    </nav>
  );
};

export default Navigation;
