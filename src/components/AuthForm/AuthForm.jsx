import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import PetsIcon from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';
// import Modal from '../Modal/Modal';
import {
  validationRegisterSchema,
  validationLoginSchema,
} from 'helpers/validationSchema';

import { register, login } from '../../redux/auth/auth-operations';
// import { selectIsLogin, selectLoading } from '../../redux/auth/selectors';

import './AuthForm.scss';

export const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const isLogin = useSelector(selectIsLogin);
  // const isLoading = useSelector(selectLoading);

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

      isRegisterPath && navigate('/user');
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
        validationSchema={
          isRegisterPath ? validationRegisterSchema : validationLoginSchema
        }
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            {/* Email Field */}
            <div>
              <div className="input-icon">
                <Field name="email">
                  {({ field, form, meta }) => (
                    <>
                      <input
                        type="text"
                        name="email"
                        {...field}
                        placeholder="Email"
                        value={values.email}
                        onChange={event => {
                          form.setFieldValue('email', event.target.value);
                        }}
                        className={`input ${
                          meta.touched && meta.error ? 'errorBorder' : ''
                        } ${values.email === '' ? 'emptyInput' : ''}`}
                      />

                      {meta.touched && meta.error && (
                        <ErrorMessage
                          name="email"
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
                    </>
                  )}
                </Field>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="input-icon">
                <Field name="password">
                  {({ field, form, meta }) => (
                    <>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        {...field}
                        placeholder="Password"
                        className={`input ${
                          meta.touched && meta.error ? 'errorBorder' : ''
                        } ${values.password === '' ? 'emptyInput' : ''}`}
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

                      {meta.touched && meta.error && (
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="errorMessage"
                        />
                      )}
                    </>
                  )}
                </Field>
              </div>
            </div>

            {/* Confirm Password Field */}
            {isRegisterPath && (
              <div>
                <div className="input-icon">
                  <Field name="confirmPassword">
                    {({ field, form, meta }) => (
                      <>
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          {...field}
                          placeholder="Confirm password"
                          className={`input ${
                            meta.touched && meta.error ? 'errorBorder' : ''
                          } ${
                            values.confirmPassword === '' ? 'emptyInput' : ''
                          }`}
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

                        {meta.touched && meta.error && (
                          <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="errorMessage"
                          />
                        )}
                      </>
                    )}
                  </Field>
                </div>
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

      {/* {showModal && !isLoading && isLogin && (
        <Modal onClose={() => setShowModal(false)} style={{ width: '608px' }}>
          <h2 className="modalH">Congrats!</h2>
          <p className="modalP">Your registration is successful</p>
          <button className="modalBtn" onClick={() => navigate('/user')}>
            Go to profile <PetsIcon className="modalIcon" />
          </button>
        </Modal>
      )} */}
    </div>
  );
};
