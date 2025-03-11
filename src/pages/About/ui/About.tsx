import { useTheme } from '@app/Context/ThemeContext';

import { PortfolioSection } from '@/features/Portfolio';
import { WorkExperience } from '@/entities/WorkExperience';
import { EducationCard } from '@/entities/Education';
import { AvatarSection } from '@/features/Avatar';

import { PrimaryButton, Star, AnimateElement } from '@/shared/ui';

import PhotoAvatar from '../assets/images/avatar.webp';

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
    <div className={`page about ${isDark ? 'dark' : 'light'}`}>
      <div className="about__avatar">
        <AvatarSection
          pathAvatar={data.avatar.path}
          descriptionAvatar={data.avatar.descriptionPath}
          title={data.avatar.title}
          subtitle={data.avatar.subtitle}
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
          <h2 className="about__title">My Experience</h2>
        </AnimateElement>
        <div className="about__block">
          <div className="about__subtitle">Experience</div>
          <div className="about__list">
            {data.experience.map((item, index) => (
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
          <h2 className="about__title">MY Education</h2>
        </AnimateElement>
        <div className="about__block">
          <div className="about__subtitle">Education</div>
          <div className="about__list">
            {data.edication.map((item, index) => (
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
        text="Download CV"
        icon="Download"
        href="path_to_file"
        download="proposed_file_name"
      ></PrimaryButton>
    </div>
  );
};

export default About;
