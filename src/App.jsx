import { BrowserRouter } from 'react-router-dom';
import UserRoutes from 'shared/UserRoutes/UserRoutes';
import { Provider } from 'react-redux';
import store from './redux/store';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


Notify.init({
  timeout: 5000,
  width: '360px',
  clickToClose: true,
  cssAnimationStyle: 'zoom',
  info: {
    background: '#54ADFF',
    notiflixIconColor: '#ffffff',
  },
  failure: {
    notiflixIconColor: '#ffffff',
  },
  success: {
    notiflixIconColor: '#ffffff',
  }
})

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/react-node-team-app">
        <AuthLayout>
          <UserRoutes />
        </AuthLayout>
      </BrowserRouter>
    </Provider>
  );
};
