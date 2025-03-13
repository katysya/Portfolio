import { motion } from 'framer-motion';
import { ReactNode, FC } from 'react';

import {
  AnimationCard,
  AnimationTitle,
} from '../../config/constants';

interface IAnimateElement {
  element: string;
  amount: number;
  once: boolean;
  children: ReactNode;
}

const AnimateElement: FC<IAnimateElement> = ({
  element,
  amount,
  once,
  children,
}) => {
  const variants =
    element === 'title' ? AnimationTitle : AnimationCard;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: amount }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateElement;
