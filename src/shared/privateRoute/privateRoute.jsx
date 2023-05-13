import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selectors';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute({ redirect = '/' }) {
  const isLogin = useSelector(selectIsLogin);
  //   const loading = useSelector(selectLoading);

  if (isLogin) {
    return <Outlet />;
  }
  return <Navigate to={redirect} />;
}
