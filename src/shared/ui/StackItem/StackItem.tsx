import { Icon } from '../index';

import './StackItem.scss';

interface IStackItem {
  name: string;
  size: number;
  color: string;
}

const StackItem = ({ name, size, color }: IStackItem) => {
  return (
    <div className="stack-item">
      <Icon name={name} size={size} color={color} />
    </div>
  );
};

export default StackItem;
