import { useTheme } from '../../../../app/Context/ThemeContext';

import '../../../../app/styles/global.scss';

function Projects() {
  const { isDark } = useTheme();
  return (
    <div className={`projects ${isDark ? 'dark' : 'light'}`}>
      <div>Projec nfdnjsbfts</div>
      <div>Projects</div>
    </div>
  );
}

export default Projects;
