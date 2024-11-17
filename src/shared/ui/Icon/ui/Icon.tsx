import * as Icons from '../assets';

interface IIconProps {
  name: string;
  size?: number;
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
      style={{ fill: color }}
    />
  );
};

export default Icon;
