import { Icon } from '@/shared/ui';

import './LocationCard.scss';

import LocationImg from '../../assets/images/avatar.webp';

const LocationCard = () => {
  return (
    <div className="location-card">
      <div className="location-card__avatar">
        <img
          className="location-card__img"
          src={LocationImg}
          alt="Avatar"
        />
      </div>
      <div className="location-card__place">
        <Icon name="Location" size={18} color="currentColor" />
        Ростов-на-Дону
      </div>
    </div>
  );
};

export default LocationCard;
