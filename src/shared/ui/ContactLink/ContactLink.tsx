import { Icon } from '../index';
import { useTheme } from '../../../../app/Context/ThemeContext';

import './ContactLink.scss';

interface IContactLink {
  key: number;
  variant: string;
  url: string;
  name: string;
  size: number;
}

const ContactLink = ({
  key,
  variant,
  url,
  name,
  size,
}: IContactLink) => {
  const { isDark } = useTheme();

  return (
    <a
      key={key}
      href={url}
      className={`contact-link ${
        variant === 'mini' ? '_mini' : '_max'
      }`}
    >
      <Icon
        name={name}
        size={size}
        color={`${isDark ? 'white' : 'dark'}`}
      ></Icon>
      {variant !== 'mini' && <div>{name}</div>}
    </a>
  );
};

export default ContactLink;
