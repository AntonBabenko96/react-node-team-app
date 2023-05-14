import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PetsIcon from '@mui/icons-material/Pets';
import Modal from '../Modal/Modal';
import validationSchema from 'helpers/validationSchema';

import { register, login } from '../../redux/auth/auth-operations';
import { selectIsLogin, selectLoading } from '../../redux/auth/selectors';


import './AuthForm.scss';

export const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const isLogin = useSelector(selectIsLogin);
  const isLoading = useSelector(selectLoading);

  const [currentPath] = useState(window.location.pathname);
  const isRegisterPath = currentPath.endsWith('/register');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

 

  const handleSubmit = (values, { resetForm }) => {
    isRegisterPath
      ? dispatch(register({ email: values.email, password: values.password }))
      : dispatch(login({ email: values.email, password: values.password }));
    resetForm();
    isRegisterPath && setShowModal(true);
    navigate('/user');
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
    </div>
  );
};
