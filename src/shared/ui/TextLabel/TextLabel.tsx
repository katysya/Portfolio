import { useTheme } from '../../../../app/Context/ThemeContext';

import './TextLabel.scss';

interface ITextLabel {
  primaryText: string;
  secondaryText: string;
  active: boolean;
}

const Textlabel = ({
  primaryText,
  secondaryText,
  active,
}: ITextLabel) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`text-label ${isDark ? 'dark' : 'light'} ${
        active ? 'active' : ''
      }`}
    >
      <p className="text-label__primary">{primaryText}</p>
      <p className="text-label__secondary">{secondaryText}</p>
    </div>
  );
};

export default Textlabel;
