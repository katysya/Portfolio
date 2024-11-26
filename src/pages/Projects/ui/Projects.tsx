import { useTheme } from '../../../../app/Context/ThemeContext';

import { ProjectCard } from '../../../entities/ProjectCard';

import './Projects.scss';

function Projects() {
  const { isDark } = useTheme();
  return (
    <div className={`projects ${isDark ? 'dark' : 'light'}`}>
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default Projects;
