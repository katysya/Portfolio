import { Star } from '../index';

import './GridStars.scss';

const GridStars = () => {
  return (
    <div className="grid-stars">
      <div className="grid-stars__item"></div>
      <div className="grid-stars__item"></div>
      <div className="grid-stars__item"></div>
      <div className="grid-stars__item"></div>
      <div className="grid-stars__item"></div>
      <div className="grid-stars__item">
        <div className="grid-stars__star">
          <Star size={28} delay={500} />
        </div>
      </div>
      <div className="grid-stars__item"></div>
      <div className="grid-stars__item"></div>
      <div className="grid-stars__item"></div>
      <div className="grid-stars__item"></div>
      <div className="grid-stars__item">
        <div className="grid-stars__star">
          <Star size={18} delay={50} />
        </div>
      </div>
      <div className="grid-stars__item"></div>
    </div>
  );
};

export default GridStars;
