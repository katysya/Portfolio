import { FC } from 'react';
import { Hashtag } from '@/shared/ui';

import './ProjectCard.scss';

interface IProjectCard {
  name: string;
  link: string;
  date: string;
  title: string;
  projectImg: string;
  hashtags: string[];
}

const ProjectCard: FC<IProjectCard> = ({
  name,
  link,
  date,
  title,
  projectImg,
  hashtags,
}) => {
  return (
    <a href={link} className="project-card" target="_blank">
      <div className="project-card__info">
        <div className="project-card__data">
          <div className="project-card__name">{name}</div>
          <span className="project-card__point">•</span>
          <div className="project-card__date">{date}</div>
        </div>
        <div className="project-card__title">{title}</div>
        <ul className="project-card__list">
          {hashtags.map((item, index) => (
            <li key={index}>
              <Hashtag text={item} />
            </li>
          ))}
        </ul>
      </div>
      <img className="project-card__img" src={projectImg} alt="" />
    </a>
  );
};

export default ProjectCard;
