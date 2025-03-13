import { FC } from 'react';

import Icon from '../Icon/ui/Icon';
import './PrimaryButton.scss';
import Resume from '../../assets/doc/ekaterina_fedyakina.pdf';

interface IPrimaryButton {
  variant: string;
  text: string;
  icon: string;
  disabled?: boolean;
}

const PrimaryButton: FC<IPrimaryButton> = ({
  variant,
  text,
  icon,
  disabled,
}) => {
  const Component = (variant === 'link' ? 'a' : 'button') as
    | 'a'
    | 'button';

  return (
    <Component
      className="primary-button"
      {...(variant === 'link'
        ? {
            href: Resume ?? undefined,
            download: 'Resume_Fedyakina_Ekaterina',
          }
        : { disabled, type: 'submit' })}
    >
      {text}
      <Icon name={icon} size={18} color="currentColor" />
    </Component>
  );
};

export default PrimaryButton;
