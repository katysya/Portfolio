import { PortfolioCard } from '../../../../entities/PortfolioCard';
import { LocationCard } from '../../../../entities/LocationCard';
import { MainMarquee } from '../../../../shared/ui';
import { StackItem } from '../../../../shared/ui';

import './PortfolioSection.scss';

const PortfolioSection = () => {
  const size = 38;

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
        <PortfolioCard
          icon="Stack"
          title="Take a look at my values"
          text="Through various projects, I've acquired valuable skills."
        />
      </div>
      <div className="portfolio-section__stack">
        <PortfolioCard
          icon="Stack"
          title="My tech staks"
          text="If you like using these tools too, we'll get along just fine."
        >
          <MainMarquee speed={30}>
            <StackItem
              name="React"
              size={size}
              color="currentColor"
            />
            <StackItem name="Next" size={size} color="currentColor" />
            <StackItem
              name="Redux"
              size={size}
              color="currentColor"
            />
            <StackItem name="Vite" size={size} color="currentColor" />
            <StackItem name="Js" size={size} color="currentColor" />
            <StackItem name="Html" size={size} color="currentColor" />
            <StackItem name="Sass" size={size} color="currentColor" />
            <StackItem name="Css" size={size} color="currentColor" />
            <StackItem
              name="Figma"
              size={size}
              color="currentColor"
            />
            <StackItem name="Git" size={size} color="currentColor" />
            <StackItem
              name="Magento"
              size={size}
              color="currentColor"
            />
          </MainMarquee>
        </PortfolioCard>
      </div>
      <div className="portfolio-section__values">
        <PortfolioCard
          icon="Victory"
          title="Take a look at my values"
          text="Through various projects, I've acquired valuable skills."
        />
      </div>
      <div className="portfolio-section__location">
        <LocationCard />
      </div>
      <div className="portfolio-section__everywhere">
        <PortfolioCard
          icon="Stack"
          title="Take a look at my values"
          text="Through various projects, I've acquired valuable skills."
        />
      </div>
    </div>
  );
};

export default PortfolioSection;
