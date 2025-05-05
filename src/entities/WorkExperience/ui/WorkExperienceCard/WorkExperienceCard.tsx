import { FC } from "react";
import { Hashtag } from "@/shared/ui";

import Experience from "../../assets/images/experience.webp";

import "./WorkExperienceCard.scss";

interface IExperience {
  time: string;
  nameCompany: string;
  position: string;
  responsibilities: string[];
  achievements: string[];
  hashtags: string[];
}

const WorkExperience: FC<IExperience> = ({
  time,
  nameCompany,
  position,
  responsibilities,
  achievements,
  hashtags,
}) => {
  return (
    <div className="work-experience">
      <div className="work-experience__block">
        <div className="work-experience__top">
          <img className="work-experience__img" src={Experience} alt="" />
          <div className="work-experience__time">{time}</div>
        </div>
        <div className="work-experience__name">{nameCompany}</div>
        <div className="work-experience__position">{position}</div>
        <div className="work-experience__subtitle">Обязанности:</div>
        <ul className="work-experience__list">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="work-experience__subtitle">Достижения:</div>
        <ul className="work-experience__list">
          {achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="work-experience__hashtags">
          {hashtags.map((item, index) => (
            <li key={index}>
              <Hashtag text={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
