import { Home } from '../../../src/pages/Home/index';
import { Projects } from '../../../src/pages/Projects/index';
import { About } from '../../../src/pages/About/index';
import { Contact } from '../../../src/pages/Contact/index';

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
