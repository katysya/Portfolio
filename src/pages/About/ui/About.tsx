import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import { useTheme } from '../../../../app/Context/ThemeContext';

import { PortfolioSection } from '../../../widgets/PortfolioSection';
import { WorkExperience } from '../../../entities/WorkExperience/index';
import { EducationCard } from '../../../entities/Education';

import { PrimaryButton } from '../../../shared/ui';

import './About.scss';

const data = {
  experience: [
    {
      id: 1,
      time: 'Ноябрь 2023 - Январь 2025',
      nameCompany: 'Oggetto',
      position: 'Frontend Developer',
      responsibilities: [
        'Разработка сайтов, лендингов на JavaScript + HTML + SCSS;',
        'Разработка приложений на Vue.js/Nuxt.js;',
        'Доработка существующих проектов;',
        'Вёрстка по макету в Figma.',
      ],
      hashtags: ['HTML', 'React.js', 'Vue.js', 'Git', 'Css/Scss'],
    },
    {
      id: 2,
      time: 'Ноябрь 2023 - Январь 2025',
      nameCompany: 'Oggetto',
      position: 'Frontend Developer',
      responsibilities: [
        'Разработка сайтов, лендингов на JavaScript + HTML + SCSS;',
        'Разработка приложений на Vue.js/Nuxt.js;',
        'Доработка существующих проектов;',
        'Вёрстка по макету в Figma.',
      ],
      hashtags: [
        'HTML',
        'React.js',
        'Vue.js',
        'Git',
        'Css/Scss',
        'Readmine',
      ],
    },
  ],
  edication: [
    {
      name: ' Донской Государственный Технический Университет',
      position: 'Бакалавр,  Программная инженерия (09.03.04)',
      time: '2018 - 2022',
    },
  ],
};

const About = () => {
  const textRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const targetText = 'My Experience';

    gsap.to(textRef.current, {
      duration: 3,
      text: {
        value: targetText,
      },
      ease: 'none',
      repeat: -1,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className={`about ${isDark ? 'dark' : 'light'}`}>
      <PortfolioSection />
      <div className="about__experience about__section">
        <h2 className="about__title" ref={textRef}>
          Loading...
        </h2>
        <div className="about__block">
          <div className="about__subtitle">Experience</div>
          <div className="about__list">
            {data.experience.map((item, index) => (
              <WorkExperience
                key={index}
                time={item.time}
                nameCompany={item.nameCompany}
                position={item.position}
                responsibilities={item.responsibilities}
                hashtags={item.hashtags}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="about__edication about__section">
        <h2 className="about__title">MY Education</h2>
        <div className="about__block">
          <div className="about__subtitle">Education</div>
          <div className="about__list">
            {data.edication.map((item, index) => (
              <EducationCard
                key={index}
                name={item.name}
                position={item.position}
                time={item.time}
              />
            ))}
          </div>
        </div>
      </div>
      <PrimaryButton
        variant="link"
        text="Download CV"
        href="path_to_file"
        download="proposed_file_name"
      ></PrimaryButton>
    </div>
  );
};

export default About;
