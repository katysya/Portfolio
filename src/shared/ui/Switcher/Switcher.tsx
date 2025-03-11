import { useTheme } from '@app/Context/ThemeContext';
import { Icon } from '@/shared/ui';

import './Switcher.scss';

const Switcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="switcher">
      <label className="switcher__toggle" htmlFor="switch">
        <input
          id="switch"
          className="switcher__input"
          type="checkbox"
          onClick={toggleTheme}
        />
        <div className="switcher__icon switcher__icon--moon">
          <Icon name="Moon" size={22} color="currentColor" />
        </div>
        <div className="switcher__icon switcher__icon--sun">
          <Icon name="Sun" size={22} color="currentColor" />
        </div>
      </label>
    </div>
  );
};

export default Switcher;
