import './About.scss';
import { WorkExperience } from '../../../entities/WorkExperience/index';

const experience = [
  {
    id: 1,
    time: 'Январь 2023 - Ноябрь 2023',
    nameCompany: 'Umax Digital Agency',
    position: 'Frontend Developer',
    responsibilities: [
      ' Разработка сайтов, лендингов на JavaScript + HTML + SCSS;',
      'Разработка приложений на Vue.js/Nuxt.js;',
      'Доработка существующих проектов;',
      'Вёрстка по макету в Figma.',
    ],
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
  },
];

const About = () => {
  return (
    <div
      className="about"
      style={{ display: 'flex', gap: '30px', padding: '60px 30px' }}
    >
      {experience.map((item, index) => (
        <WorkExperience
          key={index}
          id={item.id}
          time={item.time}
          nameCompany={item.nameCompany}
          position={item.position}
          responsibilities={item.responsibilities}
        />
      ))}
    </div>
  );
};

export default About;
