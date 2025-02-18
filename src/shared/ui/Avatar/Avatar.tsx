import './Avatar.scss';

interface IAvatar {
  path: string;
  description: string;
}

const Avatar = ({ path, description }: IAvatar) => {
  return (
    <div className="avatar">
      <img className="avatar__img" src={path} alt={description} />
    </div>
  );
};

export default Avatar;
