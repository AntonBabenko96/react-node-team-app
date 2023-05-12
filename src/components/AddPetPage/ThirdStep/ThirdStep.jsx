import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './ThirdStep.module.scss';

function ThirdStep({ data, prev, finish, onSubmit }) {
  return (
    <div>
      <Formik onSubmit={onSubmit} initialValues={data}>
        {({ values }) => (
          <Form className={styles.div}>
            <Field type="file" name="photo"></Field>
            <Field
              type="textarea"
              name="comments"
              placeholder="Tell something about your pet"
            ></Field>
            <button
              type="submit"
              className={styles.next}
              onClick={() => finish(values)}
            >
              Done
            </button>
            <button
              type="submit"
              className={styles.prev}
              onClick={() => prev(values)}
            >
              Back
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ThirdStep;
