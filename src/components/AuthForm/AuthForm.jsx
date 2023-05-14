import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PetsIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';
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
  const isLoginPath = currentPath.endsWith('/login');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (isRegisterPath) {
      dispatch(register({ email: values.email, password: values.password }));

      isRegisterPath && setShowModal(true) && navigate('/user');
    }
    if (isLoginPath) {
      dispatch(login({ email: values.email, password: values.password }));
      navigate('/user');
    }
    resetForm();
  };

  return (
    <div className="registration-form">
      <h1>{isRegisterPath ? 'Registration' : 'Login'}</h1>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setValues }) => (
          <Form>
            <div>
              <div className="input-icon">
                <Field name="email">
                  {({ field, form, meta }) => (
                    <div>
                      <input
                        type="text"
                        name="email"
                        {...field}
                        placeholder="Email"
                        value={values.email}
                        onChange={event => {
                          form.setFieldValue('email', event.target.value);
                        }}
                      />

                      {meta.touched && meta.error && (
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="errorMessage"
                        />
                      )}
                      {values.email && (
                        <CloseIcon
                          className="iconClose"
                          onClick={() => {
                            form.setFieldValue('email', '');
                          }}
                        />
                      )}
                    </div>
                  )}
                </Field>
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
              <ErrorMessage
                name="password"
                component="div"
                className="errorMessage"
              />
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
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="errorMessage"
                />
              </div>
            )}

            <button type="submit">
              {isRegisterPath ? 'Register' : 'Login'}
            </button>
          </Form>
        )}
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
        <Modal onClose={() => setShowModal(false)} style={{ width: '608px' }}>
          <h2 className="modalH1">Congrats!</h2>
          <p className="modalP">Your registration is successful</p>
          <button className="modalBtn" onClick={() => navigate('/user')}>
            Go to profile <PetsIcon className="modalIcon" />
          </button>
        </Modal>
      )}
    </div>
  );
};
