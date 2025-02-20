import { useTheme } from '../../../../app/Context/ThemeContext';
import { motion } from 'framer-motion';
import { ProjectCard } from '../../../entities/ProjectCard';
import { PrimaryButton } from '../../../shared/ui';
import { AnimationCard } from '../../../shared/config/constants';

import './Projects.scss';

function Projects() {
  const { isDark } = useTheme();

  return (
    <div className={`projects ${isDark ? 'dark' : 'light'}`}>
      <h2 className="projects__title">MY Projects 👀</h2>
      <div className="projects__list">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className="project-card-wrapper"
            variants={AnimationCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectCard />
          </motion.div>
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
