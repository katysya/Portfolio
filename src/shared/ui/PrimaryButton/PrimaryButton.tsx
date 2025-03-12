import Icon from '../Icon/ui/Icon';
import './PrimaryButton.scss';

interface IPrimaryButton {
  variant: string;
  text: string;
  icon: string;
  href?: string | null;
  disabled?: boolean;
  download?: string | null;
}

const PrimaryButton = ({
  variant,
  text,
  icon,
  href,
  disabled,
  download,
}: IPrimaryButton) => {
  const Component = (variant === 'link' ? 'a' : 'button') as
    | 'a'
    | 'button';

  return (
    <Component
      className="primary-button"
      {...(variant === 'link'
        ? { href: href ?? undefined, download: download ?? undefined }
        : { disabled, type: 'submit' })}
    >
      {text}
      <Icon name={icon} size={18} color="currentColor" />
    </Component>
  );
};

export default PrimaryButton;
