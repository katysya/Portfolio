import * as Icons from '../assets';

import './Icon.scss';

interface IIconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon = ({ name, size = 24, color }: IIconProps) => {
  const IconComponent = Icons[
    name as keyof typeof Icons
  ] as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>;

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
