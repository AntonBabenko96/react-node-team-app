import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ReactComponent as Arrow } from '../../../img/svg/arrow-left.svg';
import { ReactComponent as Paw } from '../../../img/svg/pawprint.svg';
import styles from './FirstStep.module.scss';

function FirstStep({ onSubmit, next, data, from }) {
  const radioHandler = values => {
    onSubmit(values.category);
    next(values);
  };

  const validationSchema = Yup.object({
    category: Yup.string().required('Choose category'),
  });

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <p className={styles.error}>{message}</p>}
      />
    );
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={radioHandler}
      initialValues={{ category: data }}
      className={styles.div}
    >
      <Form>
        <div className={styles.div}>
          <Field
            type="radio"
            id="choice1"
            name="category"
            value="my pet"
          ></Field>
          <label htmlFor="choice1">your pet</label>

          <Field type="radio" id="choice2" name="category" value="sell"></Field>
          <label htmlFor="choice2">sell</label>

          <Field
            type="radio"
            id="choice3"
            name="category"
            value="lost-found"
          ></Field>
          <label htmlFor="choice3">lost/found</label>

          <Field
            type="radio"
            id="choice4"
            name="category"
            value="for-free"
          ></Field>
          <label htmlFor="choice4">in good hands</label>
          <FormError className={styles.error} name="category" />
        </div>

        <div className={styles.controls}>
          <button className={styles.next} type="submit">
            Next
            <Paw className={styles.icon}></Paw>
          </button>
          <Link className={styles.cancel} to={from}>
            <Arrow className={styles.arrow}></Arrow>
            Cancel
          </Link>
        </div>
      </Form>
    </Formik>
  );
}

export default FirstStep;
