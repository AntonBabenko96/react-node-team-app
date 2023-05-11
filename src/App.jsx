import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import {AuthForm} from './/components/AuthForm/AuthForm'

export const App = () => {
  return (
    <BrowserRouter>
      <SharedLayout />
    </BrowserRouter>
  );

};
