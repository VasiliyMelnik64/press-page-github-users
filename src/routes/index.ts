import { HomePage } from '../pages/HomePage';
import { UsersPage } from '../pages/UsersPage';

export const routes = {
  home: {
    id: 1,
    label: 'navigation.home',
    path: '/',
    Component: HomePage,
  },
  users: {
    id: 2,
    label: 'navigation.users',
    path: '/users',
    Component: UsersPage,
  },
};
