import './ProjectCard.scss';
import Project1 from '../assets/images/project-1.webp';

const ProjectCard = () => {
  return (
    <a href="" className="project-card">
      <div className="project-card__wr-img">
        <img className="project-card__img" src={Project1} alt="" />
      </div>
      <div className="project-card__info">
        <div className="project-card__theme">Featured Project</div>
        <div className="project-card__title">Example Project</div>
        <div className="project-card__description">
          A web app for visualizing personalized Spotify data. View
          your top artists, top tracks, recently played tracks, and
          detailed audio information about each track. Create and save
          new playlists of recommended tracks based on your existing
          playlists and more.
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
