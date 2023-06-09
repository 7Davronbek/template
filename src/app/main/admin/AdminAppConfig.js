import { lazy } from 'react';
import CreateUser from './CreateUser';

const AdminApp = lazy(() => import('./AdminApp'));

const AdminAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'admin/list',
      element: <AdminApp />,
    },
    {
      path: 'admin/create',
      element: <CreateUser />,
    },
    // {
    //   path: 'admin/roles',
    //   element: <RolesList />,
    // },
  ],
};

export default AdminAppConfig;
