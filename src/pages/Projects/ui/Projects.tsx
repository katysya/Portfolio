import { useTheme } from '../../../../app/Context/ThemeContext';
import { ProjectCard } from '../../../entities/ProjectCard';
import {
  PrimaryButton,
  Star,
  AnimateElement,
} from '../../../shared/ui';

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
        <h2 className="projects__title">MY Projects 👀</h2>
      </AnimateElement>
      <div className="projects__list">
        {[...Array(4)].map((item, index) => (
          <div key={index}>
            <AnimateElement element="card" amount={0.25} once={true}>
              <ProjectCard />
            </AnimateElement>
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
  );
}

export default Projects;
