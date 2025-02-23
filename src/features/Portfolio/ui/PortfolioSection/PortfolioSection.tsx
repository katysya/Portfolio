import { PortfolioCard } from '../../../../entities/PortfolioCard';
import { LocationCard } from '../../../../entities/LocationCard';
import { MainMarquee, ItemCard } from '../../../../shared/ui';

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
            <ItemCard
              variant="stack"
              name="React"
              size={size}
              color="currentColor"
            />
            <ItemCard
              variant="stack"
              name="Next"
              size={size}
              color="currentColor"
            />
            <ItemCard
              variant="stack"
              name="Redux"
              size={size}
              color="currentColor"
            />
            <ItemCard
              variant="stack"
              name="Vite"
              size={size}
              color="currentColor"
            />
            <ItemCard
              variant="stack"
              name="Js"
              size={size}
              color="currentColor"
            />
            <ItemCard
              variant="stack"
              name="Html"
              size={size}
              color="currentColor"
            />
            <ItemCard
              variant="stack"
              name="Sass"
              size={size}
              color="currentColor"
            />
            <ItemCard
              variant="stack"
              name="Css"
              size={size}
              color="currentColor"
            />
            <ItemCard
              variant="stack"
              name="Figma"
              size={size}
              color="currentColor"
            />
            <ItemCard
              variant="stack"
              name="Git"
              size={size}
              color="currentColor"
            />
            <ItemCard
              variant="stack"
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
        >
          <div className="portfolio-section__values-item _1">
            <ItemCard
              variant="character"
              text="Attention to detail"
            />
          </div>
          <div className="portfolio-section__values-item _2">
            <ItemCard
              variant="character"
              text="Responsible approach to work"
            />
          </div>
          <div className="portfolio-section__values-item _3">
            <ItemCard
              variant="character"
              text="Focus on efficiency and quality"
            />
          </div>
        </PortfolioCard>
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
