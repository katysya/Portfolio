import { Avatar } from '../../../../shared/ui';

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
      <Avatar path={pathAvatar} description={descriptionAvatar} />
      <div className="avatar-section__title">{title}</div>
      <div className="avatar-section__subtitle">{subtitle}</div>
    </div>
  );
};

export default AvatarSection;
