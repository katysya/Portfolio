import Marquee from 'react-fast-marquee';

import { ReactNode } from 'react';

import './MainMarquee.scss';

interface IMainMarquee {
  speed?: number;
  children: ReactNode;
}

const MainMarquee = ({ speed = 30, children }: IMainMarquee) => {
  return (
    <div className="main-marquee">
      <Marquee speed={speed}>{children}</Marquee>
    </div>
  );
};

export default MainMarquee;
