import { Icon } from '../../../shared/ui';
import { MainMarquee } from '../../../shared/ui';
import { StackItem } from '../../../shared/ui';

import './PortfolioCard.scss';

const PortfolioCard = () => {
  const size = 38;

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
      <MainMarquee speed={30}>
        <StackItem name="React" size={size} color="currentColor" />
        <StackItem name="Next" size={size} color="currentColor" />
        <StackItem name="Js" size={size} color="currentColor" />
        <StackItem name="Html" size={size} color="currentColor" />
        <StackItem name="Sass" size={size} color="currentColor" />
        <StackItem name="Css" size={size} color="currentColor" />
        <StackItem name="Figma" size={size} color="currentColor" />
        <StackItem name="Git" size={size} color="currentColor" />
        <StackItem name="Magento" size={size} color="currentColor" />
      </MainMarquee>
    </div>
  );
};

export default PortfolioCard;
