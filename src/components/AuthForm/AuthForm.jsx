import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import './AuthForm.scss';

export const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [currentPath] = useState(window.location.pathname);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isRegisterPath = currentPath.endsWith('/register');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const toggleConfirmPasswordVisibility = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters'),
    // .required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
    // .required("Confirm Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('/api/register', values);
      console.log(response.data);
      resetForm();

      //тут також має бути редіркет на модалку Congratulations
    } catch (error) {
      console.error(error);
    }
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
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
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
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
          )}

          <button type="submit">{isRegisterPath ? 'Register' : 'Login'}</button>
        </Form>
      </Formik>

      {isRegisterPath ? (
        <p>
          Already have an account? <a href="/login"> Login</a>{' '}
        </p>
      ) : (
        <p>
          Don't have an account? <a href="/register"> Register</a>{' '}
        </p>
      )}
    </div>
  );
};
