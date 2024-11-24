import * as Icons from '../assets';

import './Icon.scss';

interface IIconProps {
  name: string;
  size?: number | 24;
  color?: string;
}

const Icon = ({ name, size, color }: IIconProps) => {
  const IconComponent = Icons[name as keyof typeof Icons];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      style={{ color: color }}
    />
  );
};

export default Icon;
