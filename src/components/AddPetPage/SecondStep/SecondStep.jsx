import React from 'react';
import { Formik, Form, Field, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';
import { Calendar } from '../Calendar/Calendar';

import styles from './SecondStep.module.scss';
import { ReactComponent as Arrow } from '../../../img/svg/arrow-left.svg';
import { ReactComponent as Paw } from '../../../img/svg/pawprint.svg';

function SecondStep({ data, prev, onSubmit }) {
  const title = data.category === 'my pet' ? false : true;
  const validationSchema = Yup.object({
    petName: Yup.string()
      .min(2, '2 characters minimum')
      .max(16, '16 characters maximum')
      .required()
      .label(`Pet name`),
    dateOfBirth: Yup.string().required().label('Date of birth'),
    type: Yup.string().required().label('Type'),
    breed: Yup.string()
      .min(2, '2 characters minimum')
      .max(16, '16 characters maximum')
      .required()
      .label('Breed'),
    title: title ? Yup.string().required() : Yup.string(),
  });

  function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return styles.errorField;
    }
    return styles.input;
  }

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
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
        initialValues={data}
        validationSchema={validationSchema}
      >
        {({ values, errors, setFieldValue }) => (
          <Form>
            <div className={styles.div}>
              {title && (
                <label className={styles.field}>
                  Title of ad
                  <Field
                    className={getStyles(errors, 'title')}
                    type="text"
                    name="title"
                    placeholder="Enter pet name"
                  ></Field>
                  <FormError className={styles.error} name="title" />
                </label>
              )}

              <label className={styles.field}>
                Pet name
                <Field
                  className={getStyles(errors, 'petName')}
                  type="text"
                  name="petName"
                  placeholder="Enter pet name"
                ></Field>
                <FormError className={styles.error} name="petName" />
              </label>

              {/* <Field
                component={Calendar}
                selected={values.dateOfBirth}
                name="dateOfBirth"
                value={values.date}
                onChange={val => setFieldValue('dateOfBirth', val)}
              ></Field> */}

              <Calendar name="dateOfBirth" values={values} />

              <label className={styles.field}>
                Date of birth
                <Field
                  className={styles.input}
                  type="text"
                  name="dateOfBirth"
                  placeholder="Enter date of birth"
                ></Field>
                <FormError className={styles.error} name="dateOfBirth" />
              </label>

              <label className={styles.field}>
                Pet type
                <Field
                  className={styles.input}
                  type="text"
                  name="type"
                  placeholder="Enter pet type"
                ></Field>
                <FormError className={styles.error} name="type" />
              </label>

              <label className={styles.field}>
                Breed
                <Field
                  className={styles.input}
                  type="text"
                  name="breed"
                  placeholder="Enter pet breed"
                ></Field>
                <FormError className={styles.error} name="breed" />
              </label>
            </div>
            <div className={styles.controls}>
              <button className={styles.next} type="submit">
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
