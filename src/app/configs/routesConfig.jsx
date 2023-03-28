import FuseUtils from '../../@fuse/utils'
import FuseLoading from '../../@fuse/core/FuseLoading';
import dashboardsConfig from "../dashboards/dashboardsConfig";
import headerAppConfig from "../main/header/headerAppConfig";
import settingsConfig from './settingsConfig';
import { Navigate } from 'react-router-dom';

const routesConfig = [
    ...dashboardsConfig,    
    ...headerAppConfig
]

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routesConfig, settingsConfig.defaultAuth),
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

export default routes