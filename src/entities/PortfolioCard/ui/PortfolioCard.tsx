import { Icon } from '../../../shared/ui';

import './PortfolioCard.scss';

const PortfolioCard = () => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card__main">
        <div className="portfolio-card__name">
          <Icon name="Stack" size={22} color="currentColor" />
          <div className="portfolio-card__title">My tech staks</div>
        </div>
        <div className="portfolio-card__description">
          If you like using these tools too, we'll get along just
          fine.
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
