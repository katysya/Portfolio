import Experience from '../assets/experience.webp';

import './WorkExperience.scss';

interface IExperience {
  id: number;
  time: string;
  nameCompany: string;
  position: string;
  responsibilities: string[];
}

const WorkExperience = ({
  id,
  time,
  nameCompany,
  position,
  responsibilities,
}: IExperience) => {
  return (
    <div className="work-experience">
      <div className="work-experience__number">{id}</div>
      <div className="work-experience__block">
        <div className="work-experience__top">
          <img
            className="work-experience__img"
            src={Experience}
            alt=""
          />
          <div className="work-experience__time">{time}</div>
        </div>
        <div className="work-experience__name">{nameCompany}</div>
        <div className="work-experience__position">{position}</div>
        <ul className="work-experience__responsibilities">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
