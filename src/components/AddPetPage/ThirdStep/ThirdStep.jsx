import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ThirdStep.module.scss';
import { ReactComponent as Arrow } from '../../../img/svg/arrow-left.svg';
import { ReactComponent as Paw } from '../../../img/svg/pawprint.svg';
import { ReactComponent as Plus } from '../../../img/svg/plus.svg';

import PreviewImage from '../PreviewImage/PreviewImage';

function ThirdStep({ data, prev, finish }) {
  const validationSchema = Yup.object({
    photo: Yup.mixed()
      .required(`required field`)
      .test(
        'FILE_SIZE',
        'File is too large!',
        value => value && value.size < 1024 * 1024
      )
      .test(
        'FILE_TYPE',
        'Unsupported file format!',
        value =>
          value &&
          ['image/png', 'image/jpeg', 'image/webp'].includes(value.type)
      ),
    comments: Yup.string().required(`required field`),
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
    <div>
      <Formik
        onSubmit={finish}
        initialValues={data}
        validationSchema={validationSchema}
      >
        {formik => (
          <Form className={styles.div} encType="multipart/form-data">
            <div className={styles.uploadwrapper}>
              <p className={styles.uploadlabel}>Add photo</p>
              {(formik.values.photo && (
                <>
                  <PreviewImage file={formik.values.photo} />
                  <button
                    onClick={() => {
                      formik.setFieldValue(`photo`, null);
                    }}
                  >
                    EDIT
                  </button>
                </>
              )) || (
                <>
                  <input
                    className={styles.input}
                    type="file"
                    id="file"
                    name="photo"
                    onChange={event => {
                      formik.setFieldValue(`photo`, event.target.files[0]);
                    }}
                  ></input>
                  <label htmlFor="file" className={styles.upload}>
                    <Plus className={styles.plus}></Plus>
                  </label>
                </>
              )}
            </div>
            <FormError name="photo" />
            <label className={styles.field}>
              Comments
              <Field
                className={styles.comments}
                as="textarea"
                type="text"
                name="comments"
                placeholder="Tell something about your pet"
              ></Field>
            </label>
            <FormError name="comments" />
            {/* <label htmlFor="ll">
              <input type="file" id="ll" />
              upload
            </label> */}
            <div className={styles.controls}>
              <button type="submit" className={styles.next}>
                Done
                <Paw className={styles.icon}></Paw>
              </button>
              <button
                type="submit"
                className={styles.prev}
                onClick={() => prev(formik.values)}
              >
                <Arrow className={styles.arrow}></Arrow>
                Back
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ThirdStep;
