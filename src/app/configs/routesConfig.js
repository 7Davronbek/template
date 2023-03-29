import FuseLoading from "@fuse/core/FuseLoading/FuseLoading"
import FuseUtils from "@fuse/utils/FuseUtils"
import settingsConfig from "app/configs/settingsConfig"
import { Navigate } from "react-router-dom"

const routeConfigs = [

]

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
    {
        path: '/',
        element: <Navigate to='dashboards/analytics' />,
        auth: settingsConfig.defaultAuth
    },
    {
      path: 'loading',
      element: <FuseLoading />,
    },
    {
      path: '*',
      element: <Navigate to="pages/error/404" />,
    },
]

export default routes