import Marquee from 'react-fast-marquee';

import { ReactNode } from 'react';

import './MainMarquee.scss';

interface IMainMarquee {
  speed?: number;
  children: ReactNode;
}

const MainMarquee = ({ speed = 30, children }: IMainMarquee) => {
  return (
    <Marquee className="main-marquee" speed={speed}>
      {children}
    </Marquee>
  );
};

export default MainMarquee;
