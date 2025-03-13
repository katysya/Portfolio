import Project1 from '../assets/images/project-1.webp';
import Project2 from '../assets/images/project-2.webp';

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

export const PortfolioBot = {
  token: '7902189231:AAFULnrNU9bua_ABC6849OMlWd06kFndLtk',
  chatId: '957305373',
  get url() {
    return `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}`;
  },
};

export const DataProjectsGitHub = [
  {
    name: 'Portfolio',
    link: 'https://github.com/katysya/Portfolio',
    date: '2025',
    title:
      'Здесь вы найдете примеры моих работ, информацию обо мне и моих навыках.',
    projectImg: Project1,
    hashtags: [
      'Portfolio',
      'React',
      'TypeScript',
      'Vite',
      'Scss',
      'Frontend',
    ],
  },
  {
    name: 'GoSurf',
    link: 'https://github.com/katysya/goSurf',
    date: '2023',
    title:
      'GoSurf — это динамичный и интерактивный лендинг, созданный для любителей серфинга.',
    projectImg: Project2,
    hashtags: ['GoSurf', 'React', 'TypeScript', 'Scss', 'Frontend'],
  },
];
