import { Home } from '@/pages/Home';
import { Projects } from '@/pages/Projects';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';

export const pages = [
  {
    id: 1,
    name: 'Home',
    component: Home,
    path: '/',
  },
  {
    id: 2,
    name: 'Projects',
    component: Projects,
    path: '/projects',
  },
  {
    id: 3,
    name: 'About',
    component: About,
    path: '/about',
  },
  {
    id: 4,
    name: 'Contact',
    component: Contact,
    path: '/contact',
  },
];
