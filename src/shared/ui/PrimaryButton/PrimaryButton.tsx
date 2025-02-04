import Icon from '../Icon/ui/Icon';
import './PrimaryButton.scss';

interface IPrimaryButton {
  variant: string;
  text: string;
  href?: string | null;
  disabled?: boolean | null;
  download?: string | null;
}

const PrimaryButton = ({
  variant,
  text,
  href,
  disabled,
  download,
}: IPrimaryButton) => {
  const Component = variant === 'link' ? 'a' : 'button';

  return (
    <Component
      className="primary-button"
      {...(disabled && { disabled: true })}
      {...(href && { href })}
      {...(download && { download: download })}
    >
      {text}
      <Icon name="Download" size={22} color="currentColor" />
    </Component>
  );
};

export default PrimaryButton;
