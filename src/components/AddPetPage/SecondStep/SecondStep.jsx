import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

import styles from './SecondStep.module.scss';
import { ReactComponent as Arrow } from '../../../img/svg/arrow-left.svg';
import { ReactComponent as Paw } from '../../../img/svg/pawprint.svg';

function SecondStep({ data, prev, onSubmit }) {
  const title = data.category === 'my pet' ? false : true;
  const regEx = /^[` 0-9A-Za-z `][` A-Za-z0-9 `]*$/;

  const validationSchema = Yup.object({
    petName: Yup.string()
      .min(2, '2 characters minimum')
      .max(32, '32 characters maximum')
      .matches(regEx, `English letters and numbers only`)
      .required()
      .label(`Pet name`),
    dateOfBirth: Yup.string()
      .required()
      .label('Date of birth')
      .matches(
        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
        'Invalid date'
      )
      .typeError(`Invalid date`),

    type: Yup.string()
      .required()
      .max(32, '32 characters maximum')
      .matches(regEx, `English letters and numbers only`)
      .label('Type'),
    breed: Yup.string()
      .min(2, '2 characters minimum')
      .max(32, '32 characters maximum')
      .matches(regEx, `English letters and numbers only`)
      .required()
      .label('Breed'),
    title: title
      ? Yup.string()
          .required()
          .min(2, '2 characters minimum')
          .max(120, '120 characters maximum')
          .matches(regEx, `English letters and numbers only`)
          .label(`Title`)
      : Yup.string().label(`Title`),
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
        validateOnBlur={false}
        onSubmit={onSubmit}
        initialValues={data}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className={styles.div}>
              {title && (
                <label className={styles.field}>
                  Title of ad
                  <Field
                    className={
                      errors.title && touched.title
                        ? styles.errorField
                        : styles.input
                    }
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
                  className={
                    errors.petName && touched.petName
                      ? styles.errorField
                      : styles.input
                  }
                  type="text"
                  name="petName"
                  placeholder="Enter pet name"
                ></Field>
                <FormError className={styles.error} name="petName" />
              </label>

              <label htmlFor="" className={styles.field}>
                Date of birth
                <Field
                  name="dateOfBirth"
                  className={
                    errors.title && touched.title
                      ? styles.errorField
                      : styles.input
                  }
                >
                  {({ form }) => {
                    const { setFieldValue } = form;
                    return (
                      <InputMask
                        value={values.dateOfBirth}
                        name="dateOfBirth"
                        mask="99-99-9999"
                        onChange={event => {
                          setFieldValue('dateOfBirth', event.target.value);
                        }}
                        className={
                          errors.dateOfBirth && touched.dateOfBirth
                            ? styles.errorField
                            : styles.input
                        }
                        placeholder="Datebirth format DD-MM-YYYY"
                      />
                    );
                  }}
                </Field>
                <FormError className={styles.error} name="dateOfBirth" />
              </label>

              <label className={styles.field}>
                Pet type
                <Field
                  className={
                    errors.type && touched.type
                      ? styles.errorField
                      : styles.input
                  }
                  type="text"
                  name="type"
                  placeholder="Enter pet type"
                ></Field>
                <FormError className={styles.error} name="type" />
              </label>

              <label className={styles.field}>
                Breed
                <Field
                  className={
                    errors.breed && touched.breed
                      ? styles.errorField
                      : styles.input
                  }
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
