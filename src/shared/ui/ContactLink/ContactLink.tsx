import { FC } from 'react';
import { Icon } from '../index';
import { useTheme } from '@/shared/lib/theme';

import './ContactLink.scss';

interface IContactLink {
  variant: string;
  url: string;
  name: string;
  size: number;
}

const ContactLink: FC<IContactLink> = ({
  variant,
  url,
  name,
  size,
}) => {
  const { isDark } = useTheme();

  return (
    <a
      href={url}
      className={`contact-link ${
        variant === 'mini' ? '_mini' : '_max'
      }`}
      target="_blank"
    >
      <Icon
        name={name}
        size={size}
        color={`${isDark ? 'white' : 'black'}`}
      ></Icon>
      {variant !== 'mini' && (
        <div className="contact-link__name">{name}</div>
      )}
    </a>
  );
};

export default ContactLink;
