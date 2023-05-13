import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PetsIcon from '@mui/icons-material/Pets';
import Modal from '../Modal/Modal';
import { register, login } from '../../redux/auth/auth-operations';
import { selectIsLogin, selectLoading } from '../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

import './AuthForm.scss';

export const AuthForm = ({ history }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [currentPath] = useState(window.location.pathname);
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  // const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const isLoading = useSelector(selectLoading);

  const isRegisterPath = currentPath.endsWith('/register');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // const handleClose = ({ target, currentTarget, code }) => {
  //   if (target === currentTarget || code === 'Escape') {
  //     setShowModal(false);
  //     //  isLogin && setRedirect(true);
  //   }
  // };

  const handleSubmit = (values, { resetForm }) => {
    isRegisterPath
      ? dispatch(register({ email: values.email, password: values.password }))
      : dispatch(login({ email: values.email, password: values.password }));
    resetForm();
    isRegisterPath && setShowModal(true);
  };

  return (
    <div className="registration-form">
      <h1>{isRegisterPath ? 'Registration' : 'Login'}</h1>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <div className="input-icon">
              <Field type="email" name="email" placeholder="Email" />
            </div>
          </div>

          <div>
            <div className="input-icon">
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
              />
              {showPassword ? (
                <RemoveRedEyeIcon
                  className="icon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <VisibilityOffIcon
                  className="icon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            <ErrorMessage name="password" component="div" />
          </div>
          {isRegisterPath && (
            <div>
              <div className="input-icon">
                <Field
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
                {showConfirmPassword ? (
                  <RemoveRedEyeIcon
                    className="icon"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="icon"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                )}
              </div>
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
          )}

          <button type="submit">{isRegisterPath ? 'Register' : 'Login'}</button>
        </Form>
      </Formik>

      {isRegisterPath ? (
        <p>
          Already have an account? <Link to="/login"> Login</Link>{' '}
        </p>
      ) : (
        <p>
          Don't have an account? <Link to="/register"> Register</Link>{' '}
        </p>
      )}
      {showModal && !isLoading && isLogin && (
        <Modal style={{ width: '608px' }}>
          <h1 className="modalH1">Congrats!</h1>
          <h2 className="modalP">Your registration is successful</h2>
          <button className="modalBtn" onClick={() => navigate('/user')}>
            Go to profile <PetsIcon className="modalIcon" />
          </button>
        </Modal>
      )}
      {/* {isLogin && <Navigate to="/user" />} */}
    </div>
  );
};
