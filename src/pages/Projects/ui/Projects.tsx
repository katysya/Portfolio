import { useTheme } from '../../../../app/Context/ThemeContext';
import { ProjectCard } from '../../../entities/ProjectCard';
import {
  PrimaryButton,
  Star,
  AnimateElement,
} from '../../../shared/ui';

import './Projects.scss';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Projects() {
  const { isDark } = useTheme();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 5%', 'end end'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const shadowOpacity = useTransform(scrollYProgress, [0, 0], [0, 0]);

  return (
    <div className={`projects ${isDark ? 'dark' : 'light'}`}>
      <div className="scroll-container-block">
        <div ref={containerRef} className="scroll-container">
          <svg className="scroll-animation" fill="none">
            <motion.path
              d="M481.5 1C463.502 383.889 203 473.5 124.5 476C45.9999 478.5 3.31716 418.775 2.4999 355.5C1.68263 292.225 117.732 177.739 241 355.5C364.268 533.261 161 826.5 124.5 972C87.9998 1117.5 170 1234.5 241 1213.5C312 1192.5 289.5 939.5 360.5 972C431.5 1004.5 210 1512.5 360.5 1555C511 1597.5 494.999 1145.5 599 1192.5C703 1239.5 487.999 1713 731.5 1690.5C975 1668 1082 1325.5 1082 1325.5"
              stroke={isDark ? 'white' : 'black'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="0"
              strokeDashoffset="1000"
              initial={{ pathLength: 0 }}
              style={{
                pathLength,
                filter: useTransform(
                  shadowOpacity,
                  (opacity) =>
                    `drop-shadow(0px 0px 10px rgba(160, 0, 160, ${opacity}))`
                ),
              }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </svg>
        </div>
      </div>

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
        {[...Array(4)].map((index) => (
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
