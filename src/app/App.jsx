import { BrowserRouter } from 'react-router-dom';
import withAppProviders from './WithAppProviders';

function App() {
  return <BrowserRouter>APP</BrowserRouter>;
}

export default withAppProviders(App)();
