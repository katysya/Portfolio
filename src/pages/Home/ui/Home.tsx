import { useTheme } from '../../../../app/Context/ThemeContext';
import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import '../../../../app/styles/global.scss';
import './Home.scss';

function Projects() {
  const { isDark } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (particleContainer: Container | undefined) => {
      await console.log(particleContainer);
    },
    []
  );

  const textRef = useRef(null);

  useEffect(() => {
    const lines = textRef.current.querySelectorAll('.line');

    const tl = gsap.timeline();
    tl.fromTo(
      lines,
      { opacity: 0, y: 50 }, // Начальное состояние
      {
        opacity: 1,
        y: 0, // Конечное состояние
        duration: 1,
        stagger: 0.5, // Задержка между строками
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div className={`home ${isDark ? 'dark' : 'light'}`}>
      <div ref={textRef} className="home__text">
        <p className="line">
          This is the <span className="home__highlighted">first</span>{' '}
          line
        </p>
        <p className="line">
          Here comes the{' '}
          <span className="home__highlighted">second</span> line
        </p>
        <p className="line">
          And <span className="home__highlighted">finally</span>, the
          third line
        </p>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Projects;
