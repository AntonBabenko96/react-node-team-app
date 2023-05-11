// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import SharedLayout from './components/SharedLayout/SharedLayout';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';


export const App = () => {
  return <>
  <SharedLayout />
  <NoticesSearch/>
  </>

};
