import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PetsIcon from '@mui/icons-material/Pets';
import Modal from '../Modal/Modal'

import './AuthForm.scss';

export const AuthForm = ({ history }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [currentPath] = useState(window.location.pathname);
  const [showModal, setShowModal] = useState(false);


  const isRegisterPath = currentPath.endsWith('/register');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
      setShowModal(true);
      history.push('/userPage');
    } catch (error) {
      console.error(error);
    }
  };
  const handleClose = ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        setShowModal(false); 
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
          Already have an account? <a href="/login"> Login</a>{' '}
        </p>
      ) : (
        <p>
          Don't have an account? <a href="/register"> Register</a>{' '}
        </p>
      )}
      {showModal && (
        <Modal onClose={handleClose}>
        <h1>Congrats!</h1>
        <h2>Your registration is successful</h2>
        <button onClick={handleClose}>Go to profile <PetsIcon className="btn-icon" /></button>
      </Modal>
      )}
    </div>
  );
};