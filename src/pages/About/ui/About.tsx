import { useTheme } from '@/shared/lib/theme';

import { PortfolioSection } from '@/features/Portfolio';
import { WorkExperience } from '@/entities/WorkExperience';
import { EducationCard } from '@/entities/Education';
import { AvatarSection } from '@/features/Avatar';

import { PrimaryButton, Star, AnimateElement } from '@/shared/ui';
import { dataAboutMe } from '../config/constants';

import PhotoAvatar from '../assets/images/avatar.webp';

import './About.scss';

const About = () => {
  const { isDark } = useTheme();

  return (
    <div className={`page about ${isDark ? 'dark' : 'light'}`}>
      <div className="about__avatar">
        <AvatarSection
          pathAvatar={PhotoAvatar}
          descriptionAvatar={dataAboutMe.avatar.descriptionPath}
          title={dataAboutMe.avatar.title}
          subtitle={dataAboutMe.avatar.subtitle}
        />
      </div>
      <div className="about__grid-star">
        <div className="about__grid-star-item _1">
          <Star size={18} delay={500} />
        </div>
        <div className="about__grid-star-item _2">
          <Star size={28} delay={0} />
        </div>
        <div className="about__grid-star-item _3">
          <Star size={40} delay={1100} />
        </div>
      </div>
      <PortfolioSection />
      <div className="about__grid-star">
        <div className="about__grid-star-item _4">
          <Star size={16} delay={500} />
        </div>
        <div className="about__grid-star-item _5">
          <Star size={32} delay={0} />
        </div>
        <div className="about__grid-star-item _6">
          <Star size={50} delay={800} />
        </div>
      </div>
      <div className="about__experience about__section">
        <AnimateElement element="title" amount={0.25} once={true}>
          <h2 className="about__title">Опыт работы</h2>
        </AnimateElement>
        <div className="about__block">
          <div className="about__subtitle">Опыт работы:</div>
          <div className="about__list">
            {dataAboutMe.experience.map((item, index) => (
              <div key={index}>
                <AnimateElement
                  element="card"
                  amount={0.25}
                  once={true}
                >
                  <WorkExperience
                    time={item.time}
                    nameCompany={item.nameCompany}
                    position={item.position}
                    responsibilities={item.responsibilities}
                    hashtags={item.hashtags}
                  />
                </AnimateElement>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about__edication about__section">
        <div className="about__grid-star">
          <div className="about__grid-star-item _1">
            <Star size={18} delay={500} />
          </div>
          <div className="about__grid-star-item _2">
            <Star size={28} delay={0} />
          </div>
          <div className="about__grid-star-item _3">
            <Star size={40} delay={1100} />
          </div>
        </div>
        <AnimateElement element="title" amount={0.25} once={true}>
          <h2 className="about__title">Образование</h2>
        </AnimateElement>
        <div className="about__block">
          <div className="about__subtitle">Образование</div>
          <div className="about__list">
            {dataAboutMe.edication.map((item, index) => (
              <div key={index}>
                <AnimateElement
                  element="card"
                  amount={0.25}
                  once={true}
                >
                  <EducationCard
                    name={item.name}
                    position={item.position}
                    time={item.time}
                  />
                </AnimateElement>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PrimaryButton
        variant="link"
        text="Скачать Резюме"
        icon="Download"
      ></PrimaryButton>
    </div>
  );
};

export default About;
