import { PortfolioCard } from '@/entities/PortfolioCard';
import { ContactData } from '@/shared/config/constants';
import { LocationCard } from '@/entities/LocationCard';
import {
  MainMarquee,
  ItemCard,
  FitnessAnimation,
  ContactLink,
  PrimaryButton,
} from '@/shared/ui';

import './PortfolioSection.scss';

const PortfolioSection = () => {
  const size = 38;

  return (
    <div className="portfolio-section">
      <div className="portfolio-section__main">
        <p className="portfolio-section__subtitle">
          Помимо портфолио
        </p>
        <h3 className="portfolio-section__title">
          Узнать обо мне больше
        </h3>
      </div>
      <div className="portfolio-section__info">
        <PortfolioCard
          icon="Stars"
          title="Связаться со мной"
          text="Для связи со мной вы можете написать мне или скачать моё резюме с подробной информацией обо мне:"
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
              text="Скачать Резюме"
              icon="Download"
            ></PrimaryButton>
          </div>
        </PortfolioCard>
      </div>
      <div className="portfolio-section__stack">
        <PortfolioCard
          icon="Stack"
          title="Технический стек"
          text="Я использую следующие технологии:"
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
          title="Что для меня важно"
          text="Благодаря различным проектам я приобрела ценные навыки:"
        >
          <div className="portfolio-section__values-item _1">
            <ItemCard variant="character" text="Внимание к деталям" />
          </div>
          <div className="portfolio-section__values-item _2">
            <ItemCard
              variant="character"
              text="Ответственный подход к работе"
            />
          </div>
          <div className="portfolio-section__values-item _3">
            <ItemCard
              variant="character"
              text="Фокус на эффективности и качестве"
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
          title="Хобби"
          text="Я увлечена фитнесом и силовыми тренировками, которые помогают мне развивать дисциплину, выносливость и поддерживать здоровый образ жизни, что способствует высокой результативности во всех сферах жизни."
        >
          <FitnessAnimation />
        </PortfolioCard>
      </div>
    </div>
  );
};

export default PortfolioSection;
