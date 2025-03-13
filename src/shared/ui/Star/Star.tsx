import { FC } from 'react';

import { Icon } from '../index';

import './Star.scss';

interface IStar {
  size: number;
  delay: number;
}

const Star: FC<IStar> = ({ size, delay }) => {
  return (
    <div className="star" style={{ animationDelay: `${delay}ms` }}>
      <Icon name="Star" size={size} color="currentColor" />
    </div>
  );
};

export default Star;
