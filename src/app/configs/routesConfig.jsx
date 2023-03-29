import { Navigate } from 'react-router-dom';
import FuseUtils from '../../@fuse/utils/FuseUtils';
import FuseLoading from '../../@fuse/core/FuseLoading/FuseLoading';
import settingsConfig from './settingsConfig';
import dashboardsConfigs from '../main/dashboards/dashboardsConfig';

const routeConfigs = [...dashboardsConfigs];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="dashboards/analytics" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '*',
    element: <Navigate to="pages/error/404" />,
  },
];

export default routes;
