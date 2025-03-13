import { motion } from 'framer-motion';

import '@app/styles/global.scss';
import './Home.scss';

import { MainParticles } from '@/shared/ui';

function Projects() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: i * 0.5 },
    }),
  };

  const text = [
    { text: 'Привет! Я ', highlight: 'Frontend Developer,' },
    {
      text: 'и это моё ',
      highlight: 'Портфолио.',
    },
  ];

  return (
    <div className="page home">
      <div className="home__text">
        {text.map((item, index) => (
          <motion.p
            key={index}
            className="home__line"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {item.text}
            <motion.span
              className="home__highlighted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.5 + 0.2 }}
            >
              {item.highlight}
            </motion.span>
          </motion.p>
        ))}
      </div>
      <MainParticles />
    </div>
  );
}

export default Projects;
