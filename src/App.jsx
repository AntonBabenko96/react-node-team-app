import { BrowserRouter } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import { Provider } from 'react-redux';
// import store from './redux/store';

export const App = () => {
  return (
    // <Provider store={store}>
    <BrowserRouter basename="/react-node-team-app">
      <SharedLayout />
    </BrowserRouter>
    // </Provider>
  );
};
