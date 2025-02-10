import { FC } from 'react';

import './Hashtag.scss';

interface IHashtag {
  text: string;
}

const Hashtag: FC<IHashtag> = ({ text }) => {
  return <div className="hashtag">#{text}</div>;
};

export default Hashtag;
