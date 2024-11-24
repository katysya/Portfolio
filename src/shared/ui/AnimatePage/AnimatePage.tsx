import { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Transition } from 'framer-motion';

interface IAnimateProps {
  children?: ReactNode;
  variants: number;
  transition?: Transition;
  style?: CSSProperties;
}

const animateProperty = [
  {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(20px)' },
  },
];

const AnimatePage = ({
  children,
  variants,
  transition,
  style,
}: IAnimateProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={animateProperty[variants]}
    transition={transition}
    style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    }}
  >
    {children}
  </motion.div>
);

export default AnimatePage;
