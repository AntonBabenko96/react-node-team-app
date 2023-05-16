import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refresh } from 'redux/auth/auth-operations';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, []);

  return children;
};

export default AuthLayout;
