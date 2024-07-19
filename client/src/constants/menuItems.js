import { USER_GROUPS } from '@/constants/userGroups';
import { PAGE_ROUTES } from './vars';

const generalItems = [
  {
    identifier: 'home',
    title: 'Home',
    to: PAGE_ROUTES.HOME,
    hasSubMenu: false,
    showInDesktop: true,
    showInMobile: true
  },
  {
    identifier: 'our-services',
    title: 'Our Services',
    to: '/',
    hasSubMenu: true,
    showInDesktop: true,
    showInMobile: true,
    submenuTranslteX: '-100px'
  }
];

export const MENU_ITEMS = [...generalItems];

export const SUB_MENU_ITEMS = {
  'our-services': [
    {
      identifier: 'mvp-development',
      title: 'MVP Development',
      to: '/'
    },

    {
      identifier: 'web-app-development',
      title: 'Customized Web/Mobile App Development',
      to: '/'
    },

    {
      identifier: 'branding',
      title: 'Website Development & Branding',
      to: '/'
    },

    {
      identifier: 'counselling',
      title: 'Counselling & Coaching',
      to: '/'
    },

    {
      identifier: 'team-augmentation',
      title: 'Team Augmentation',
      to: '/'
    }
  ]
};
