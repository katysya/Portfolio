import { motion } from 'framer-motion';

import '../../../../app/styles/global.scss';
import './Home.scss';

import { MainParticles } from '../../../shared/ui';

function Projects() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: i * 0.5 },
    }),
  };

  return (
    <div className="page home">
      <div className="home__text">
        {[
          { text: 'This is the ', highlight: ' first' },
          { text: 'Here comes the ', highlight: ' second' },
          { text: 'And finally, the ', highlight: ' third' },
        ].map((item, i) => (
          <motion.p
            key={i}
            className="line"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {item.text}
            <motion.span
              className="home__highlighted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.5 + 0.2 }}
            >
              {item.highlight}
            </motion.span>
            &nbsp;line
          </motion.p>
        ))}
      </div>
      <MainParticles />
    </div>
  );
}

export default Projects;
