import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import "./AuthForm.scss"

export const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="registration-form">
      <h1>Registration</h1>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
          <div className="input-icon">
            <Field type="email" name="email" placeholder="Email" />
            {/* <ErrorMessage name="email" component="div" /> */}
            </div>
          </div>

          <div>
            <div className="input-icon">
              <Field
                type={showPassword ? "text" : "password"}
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

          <div>
            <div className="input-icon">
              <Field
                type={showConfirmPassword ? "text" : "password"}
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

          <button type="submit">Registration</button>
        </Form>
      </Formik>

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};


