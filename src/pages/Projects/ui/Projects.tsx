import { useTheme } from '../../../../app/Context/ThemeContext';

import { ProjectCard } from '../../../entities/ProjectCard';

import { PrimaryButton } from '../../../shared/ui';

import './Projects.scss';

function Projects() {
  const { isDark } = useTheme();
  return (
    <div className={`projects ${isDark ? 'dark' : 'light'}`}>
      <h2 className="projects__title">MY Projects 👀</h2>
      <div className="projects__list">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <PrimaryButton
        variant="link"
        text="Download CV"
        href="path_to_file"
        download="proposed_file_name"
      ></PrimaryButton>
    </div>
  );
}

export default Projects;
