import { PortfolioCard } from '../../../entities/PortfolioCard';
import { LocationCard } from '../../../entities/LocationCard';

import './PortfolioSection.scss';

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-section__main">
        <p className="portfolio-section__subtitle">
          Beyond portfolio
        </p>
        <h3 className="portfolio-section__title">
          Let's know more about me
        </h3>
      </div>
      <div className="portfolio-section__language">
        <PortfolioCard />
      </div>
      <div className="portfolio-section__stack">
        <PortfolioCard />
      </div>
      <div className="portfolio-section__values">
        <PortfolioCard />
      </div>
      <div className="portfolio-section__location">
        <LocationCard />
      </div>
      <div className="portfolio-section__everywhere">
        <PortfolioCard />
      </div>
    </div>
  );
};

export default PortfolioSection;
