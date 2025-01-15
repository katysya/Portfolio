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
      <p className="text-label__primary text-label__text">
        {primaryText}
      </p>
      <p className="text-label__secondary text-label__text">
        {secondaryText}
      </p>
    </div>
  );
};

export default Textlabel;
