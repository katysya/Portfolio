import {
  Avatar,
  GridStars,
  AnimateElement,
} from '../../../../shared/ui';

import './AvatarSection.scss';

interface IAvatarSection {
  pathAvatar: string;
  descriptionAvatar: string;
  title: string;
  subtitle: string;
}

const AvatarSection = ({
  pathAvatar,
  descriptionAvatar,
  title,
  subtitle,
}: IAvatarSection) => {
  return (
    <div className="avatar-section">
      <div className="avatar-section__grid _top">
        <GridStars />
      </div>
      <Avatar path={pathAvatar} description={descriptionAvatar} />
      <AnimateElement element="title" amount={0.25} once={true}>
        <div className="avatar-section__title">{title}</div>
      </AnimateElement>
      <div className="avatar-section__subtitle">{subtitle}</div>
      <div className="avatar-section__grid _bottom">
        <GridStars />
      </div>
    </div>
  );
};

export default AvatarSection;
