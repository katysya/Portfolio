import { FC } from 'react';
import { Icon } from '../index';

import './ItemCard.scss';

interface IItemCard {
  variant: string;
  name?: string;
  size?: number;
  color?: string;
  text?: string;
}

const ItemCard: FC<IItemCard> = ({
  variant,
  name,
  size,
  color,
  text,
}) => {
  return (
    <div
      className={`item-card ${
        variant === 'stack' ? '_stack' : '_character'
      }`}
    >
      {variant === 'stack' && (
        <Icon name={name ? name : ''} size={size} color={color} />
      )}
      {text && <p className="item-text">{text}</p>}
    </div>
  );
};

export default ItemCard;
