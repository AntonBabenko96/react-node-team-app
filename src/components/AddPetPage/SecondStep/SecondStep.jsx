import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './SecondStep.module.scss';

function SecondStep({ data, prev, next, onSubmit }) {
  return (
    <>
      <Formik onSubmit={onSubmit} initialValues={data}>
        {({ values }) => (
          <Form>
            <div className={styles.div}>
              <Field
                type="text"
                name="petName"
                placeholder="Enter pet name"
              ></Field>
              <Field
                type="text"
                name="dateOfBirth"
                placeholder="Enter date of birth"
              ></Field>
              <Field
                type="text"
                name="type"
                placeholder="Enter pet type"
              ></Field>
              <Field
                type="text"
                name="breed"
                placeholder="Enter pet breed"
              ></Field>
            </div>
            <button
              className={styles.next}
              type="submit"
              onClick={() => next(values)}
            >
              Next
            </button>
            <button
              className={styles.prev}
              type="submit"
              onClick={() => prev(values)}
            >
              Back
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SecondStep;
