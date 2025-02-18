import { Hashtag } from '../../../shared/ui';

import './ProjectCard.scss';

import Project1 from '../assets/images/project-1.webp';

const ProjectCard = () => {
  return (
    <a href="" className="project-card">
      <div className="project-card__info">
        <div className="project-card__data">
          <div className="project-card__name">Resume</div>
          <span className="project-card__point">•</span>
          <div className="project-card__date">2024</div>
        </div>
        <div className="project-card__title">
          Revolutionizing Business Data Management with an Innovative
          Work OS
        </div>
        <ul className="project-card__list">
          <li>
            <Hashtag text="Frontend" />
          </li>
          <li>
            <Hashtag text="React" />
          </li>
          <li>
            <Hashtag text="Vite" />
          </li>
          <li>
            <Hashtag text="Next" />
          </li>
          <li>
            <Hashtag text="Portfolio" />
          </li>
        </ul>
      </div>
      <img className="project-card__img" src={Project1} alt="" />
    </a>
  );
};

export default ProjectCard;
