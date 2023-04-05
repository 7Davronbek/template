import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'example-component',
    title: 'Example',
    translate: 'EXAMPLE',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'example',
  },
  {
    id: 'Users',
    title: 'Users',
    translate: 'Users',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'admin/list',
  },
  {
    id: 'Roles',
    title: 'Roles',
    translate: 'Roles',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'role',
  },
];

export default navigationConfig;
