import { useTheme } from '../../../../app/Context/ThemeContext';

import { PortfolioSection } from '../../../features/Portfolio';
import { WorkExperience } from '../../../entities/WorkExperience/index';
import { EducationCard } from '../../../entities/Education';

import { PrimaryButton } from '../../../shared/ui';
import { AvatarSection } from '../../../features/Avatar';

import { AnimationCard } from '../../../shared/config/constants';
import { motion } from 'framer-motion';

import PhotoAvatar from '../assets/images/avatar.webp';
import Grid from '../assets/images/grid.png';

import './About.scss';

const data = {
  avatar: {
    path: PhotoAvatar,
    descriptionPath: 'Avatar',
    title: 'I am a Frontend Developer',
    subtitle:
      'I am just a curious guy who loves creating cool and fun stuff. I like to dive into different areas just because they intrigue me, and once ve got the hang of it, I move on to something new. Im all about crafting enjoyable experiences and finding creative, realistic solutions that fit the context and work with the challenges at hand.',
  },
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
  const { isDark } = useTheme();

  return (
    <div className={`about ${isDark ? 'dark' : 'light'}`}>
      <div className="about__avatar">
        <img className="about__grid _top" src={Grid} alt="" />
        <AvatarSection
          pathAvatar={data.avatar.path}
          descriptionAvatar={data.avatar.descriptionPath}
          title={data.avatar.title}
          subtitle={data.avatar.subtitle}
        />
        <img className="about__grid _bottom" src={Grid} alt="" />
      </div>
      <PortfolioSection />
      <div className="about__experience about__section">
        <h2 className="about__title">My Experience</h2>
        <div className="about__block">
          <div className="about__subtitle">Experience</div>
          <div className="about__list">
            {data.experience.map((item, index) => (
              <motion.div
                variants={AnimationCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <WorkExperience
                  key={index}
                  time={item.time}
                  nameCompany={item.nameCompany}
                  position={item.position}
                  responsibilities={item.responsibilities}
                  hashtags={item.hashtags}
                />
              </motion.div>
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
              <motion.div
                variants={AnimationCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <EducationCard
                  key={index}
                  name={item.name}
                  position={item.position}
                  time={item.time}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <PrimaryButton
        variant="link"
        text="Download CV"
        icon="Download"
        href="path_to_file"
        download="proposed_file_name"
      ></PrimaryButton>
    </div>
  );
};

export default About;
