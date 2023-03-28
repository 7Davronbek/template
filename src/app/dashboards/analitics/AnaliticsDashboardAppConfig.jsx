import { lazy } from "react";

const AnaliticsDashboardApp = lazy(() => import("./AnaliticsDashboardApp"));

const AnaliticsDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "dashboards/analytics",
      element: <AnaliticsDashboardApp />,
    },
  ],
};

export default AnaliticsDashboardAppConfig;
