import { useTheme } from '../../../../app/Context/ThemeContext';

import '../../../../app/styles/global.scss';

function Projects() {
  const { isDark } = useTheme();
  return (
    <div className={`home ${isDark ? 'dark' : 'light'}`}>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
    </div>
  );
}

export default Projects;
