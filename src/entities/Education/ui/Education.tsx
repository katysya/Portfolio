import { FC } from 'react';
import './Education.scss';

interface IEducationCard {
  name: string;
  position: string;
  time: string;
}

const EducationCard: FC<IEducationCard> = ({
  name,
  position,
  time,
}) => {
  return (
    <div className="education">
      <div className="education__name">{name}</div>
      <div className="education__position">{position}</div>
      <div className="education__time">{time}</div>
    </div>
  );
};

export default EducationCard;
