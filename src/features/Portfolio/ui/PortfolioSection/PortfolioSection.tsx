import { PortfolioCard } from '../../../../entities/PortfolioCard';
import { ContactData } from '../../../../shared/config/constants';
import { LocationCard } from '../../../../entities/LocationCard';
import {
  MainMarquee,
  ItemCard,
  FitnessAnimation,
  ContactLink,
  PrimaryButton,
} from '../../../../shared/ui';

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
      <div className="portfolio-section__info">
        <PortfolioCard
          icon="Stars"
          title="Contact me"
          text="Through various projects, I've acquired valuable skills."
        >
          <div className="portfolio-section__info-block">
            <div className="portfolio-section__icons">
              {ContactData.map((item, index) => (
                <div
                  className={`portfolio-section__icon ${item.name}`}
                  key={index}
                >
                  <ContactLink
                    variant="max"
                    url={item.url}
                    name={item.name}
                    size={item.size}
                  />
                </div>
              ))}
            </div>
            <PrimaryButton
              variant="link"
              text="Download CV"
              icon="Download"
              href="path_to_file"
              download="proposed_file_name"
            ></PrimaryButton>
          </div>
        </PortfolioCard>
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
          icon="Clover"
          title="Hobby"
          text="I do fitness and strength training, developing discipline,
            endurance and maintaining a healthy lifestyle for high
            performance."
        >
          <FitnessAnimation />
        </PortfolioCard>
      </div>
    </div>
  );
};

export default PortfolioSection;
