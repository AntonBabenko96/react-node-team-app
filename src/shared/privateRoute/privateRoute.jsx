import { useSelector } from 'react-redux';
import { selectIsLogin, selectLoading } from 'redux/auth/selectors';
import { Outlet, Navigate } from 'react-router-dom';
import Loader from 'shared/Loder/Loader';

export default function PrivateRoute({ redirect = '/' }) {
  const isLogin = useSelector(selectIsLogin);
  const loading = useSelector(selectLoading);

  if (isLogin) {
    return <Outlet />;
  }
  if (!isLogin && loading) {
    return <Loader />;
  }
  return <Navigate to={redirect} />;
}
