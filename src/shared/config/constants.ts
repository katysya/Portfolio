export const AnimationCard = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const AnimationTitle = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    filter: 'blur(5px)',
    rotate: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    rotate: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
      delay: 0.2,
      type: 'spring',
      stiffness: 50,
    },
  },
};

export const ContactData = [
  {
    id: 1,
    name: 'Telegram',
    size: 22,
    url: 'https://t.me/katyusyafed',
  },
  {
    id: 2,
    name: 'GitHub',
    size: 22,
    url: 'https://github.com/katysya?tab=repositories',
  },
  {
    id: 3,
    name: 'Email',
    size: 22,
    url: 'mailto:katharine.fed05@yandex.ru',
  },
  {
    id: 4,
    name: 'LinkedIn',
    size: 22,
    url: 'https://www.linkedin.com/in/ekaterina-fedyakina-65925b256/',
  },
];
