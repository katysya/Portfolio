import { FC } from 'react';
import * as Icons from '../assets';

import './Icon.scss';

interface IIcon {
  name: string;
  size?: number;
  color?: string;
}

const Icon: FC<IIcon> = ({ name, size = 24, color }) => {
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
