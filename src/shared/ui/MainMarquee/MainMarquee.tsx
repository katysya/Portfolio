import Marquee from 'react-fast-marquee';

import { ReactNode, FC } from 'react';

import './MainMarquee.scss';

interface IMainMarquee {
  speed?: number;
  children: ReactNode;
}

const MainMarquee: FC<IMainMarquee> = ({ speed = 30, children }) => {
  return (
    <div className="main-marquee">
      <Marquee speed={speed}>{children}</Marquee>
    </div>
  );
};

export default MainMarquee;
