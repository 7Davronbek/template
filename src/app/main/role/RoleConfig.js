import RolePage from './RolePage';

const RoleConfig = {
  //   settings: {
  //     layout: {
  //       config: {
  //         navbar: {
  //           display: false,
  //         },
  //         toolbar: {
  //           display: false,
  //         },
  //         footer: {
  //           display: false,
  //         },
  //         leftSidePanel: {
  //           display: false,
  //         },
  //         rightSidePanel: {
  //           display: false,
  //         },
  //       },
  //     },
  //   },

  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'role',
      element: <RolePage />,
    },
  ],
};

export default RoleConfig;
