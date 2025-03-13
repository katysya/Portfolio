import { useTheme } from '@/shared/lib/theme';
import { ProjectCard } from '@/entities/Project';
import { PrimaryButton, Star, AnimateElement } from '@/shared/ui';
import { DataProjectsGitHub } from '@/shared/config/constants';

import './Projects.scss';

function Projects() {
  const { isDark } = useTheme();

  return (
    <div className={`page projects ${isDark ? 'dark' : 'light'}`}>
      <div className="projects__grid-stars">
        <div className="projects__grid-stars-item _1">
          <Star size={18} delay={500} />
        </div>
        <div className="projects__grid-stars-item _2">
          <Star size={28} delay={0} />
        </div>
        <div className="projects__grid-stars-item _3">
          <Star size={40} delay={1100} />
        </div>
      </div>
      <AnimateElement element="title" amount={0.25} once={true}>
        <h2 className="projects__title">Проекты 👀</h2>
      </AnimateElement>
      <div className="projects__list">
        {DataProjectsGitHub.map((item, index) => (
          <div key={index}>
            <AnimateElement element="card" amount={0.25} once={true}>
              <ProjectCard
                name={item.name}
                link={item.link}
                date={item.date}
                title={item.title}
                projectImg={item.projectImg}
                hashtags={item.hashtags}
              />
            </AnimateElement>
          </div>
        ))}
      </div>
      <PrimaryButton
        variant="link"
        text="Скачать Резюме"
        icon="Download"
      ></PrimaryButton>
    </div>
  );
}

export default Projects;
