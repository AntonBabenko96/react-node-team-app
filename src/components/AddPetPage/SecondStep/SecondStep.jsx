import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from './SecondStep.module.scss';
import { ReactComponent as Arrow } from '../../../img/svg/arrow-left.svg';
import { ReactComponent as Paw } from '../../../img/svg/pawprint.svg';

function SecondStep({ data, prev, next, onSubmit }) {
  const validationSchema = Yup.object({
    petName: Yup.string().required(`required field`),
    dateOfBirth: Yup.string().required(`required field`),
    type: Yup.string().required(`required field`),
    breed: Yup.string().required(`required field`),
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
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={data}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form>
            <div className={styles.div}>
              <label className={styles.field}>
                Pet name
                <Field
                  className={styles.input}
                  type="text"
                  name="petName"
                  placeholder="Enter pet name"
                ></Field>
              </label>
              <FormError name="petName" />

              <label className={styles.field}>
                Date of birth
                <Field
                  className={styles.input}
                  type="text"
                  name="dateOfBirth"
                  placeholder="Enter date of birth"
                ></Field>
              </label>
              <FormError name="dateOfBirth" />

              <label className={styles.field}>
                Pet type
                <Field
                  className={styles.input}
                  type="text"
                  name="type"
                  placeholder="Enter pet type"
                ></Field>
              </label>
              <FormError name="type" />

              <label className={styles.field}>
                Breed
                <Field
                  className={styles.input}
                  type="text"
                  name="breed"
                  placeholder="Enter pet breed"
                ></Field>
              </label>
              <FormError name="breed" />
            </div>
            <div className={styles.controls}>
              <button
                className={styles.next}
                type="submit"
                // onClick={() => next(values)}
              >
                Next
                <Paw className={styles.icon}></Paw>
              </button>
              <button
                className={styles.prev}
                type="submit"
                onClick={() => prev(values)}
              >
                <Arrow className={styles.arrow}></Arrow>
                Back
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SecondStep;
