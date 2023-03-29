import routes from './configs/routesConfig';
import AppContext from './AppContext';

const withAppProviders = (Component) => (props) => {
  function WrapperComponent() {
    return (
      <AppContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          routes,
        }}
      >
        {/* <Provider store={store}> */}
        <Component {...props} />
        {/* </Provider> */}
      </AppContext.Provider>
    );
  }

  return WrapperComponent;
};

export default withAppProviders;
