import { Icon } from '../index';
import { useTheme } from '../../../../app/Context/ThemeContext';

interface IContactLink {
  id: number;
  url: string;
  name: string;
  size: number;
}

const ContactLink = ({ id, url, name, size }: IContactLink) => {
  const { isDark } = useTheme();

  return (
    <a key={id} href={url} className="footer__link">
      <Icon
        name={name}
        size={size}
        color={`${isDark ? 'white' : 'dark'}`}
      ></Icon>
    </a>
  );
};

export default ContactLink;
