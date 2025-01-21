import './About.scss';
import { WorkExperience } from '../../../entities/WorkExperience/index';

import './About.scss';

const experience = [
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
    hashtags: ['HTML', 'React.js', 'Vue.js', 'Git', 'Css/Scss'],
  },
  {
    id: 3,
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
    id: 4,
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
];

const About = () => {
  return (
    <div className="about">
      <div className="about__experience">
        <h2 className="about__title">MY EXPERIENCES</h2>
        <div className="about__block">
          <div className="about__subtitle">Experience</div>
          <div className="about__list">
            {experience.map((item, index) => (
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
    </div>
  );
};

export default About;
