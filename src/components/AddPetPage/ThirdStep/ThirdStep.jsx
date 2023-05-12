import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './ThirdStep.module.scss';
import { ReactComponent as Arrow } from '../../../img/svg/arrow-left.svg';
import { ReactComponent as Paw } from '../../../img/svg/pawprint.svg';
import { ReactComponent as Plus } from '../../../img/svg/plus.svg';

import PreviewImage from '../PreviewImage/PreviewImage';

function ThirdStep({ data, prev, finish }) {
  return (
    <div>
      <Formik onSubmit={finish} initialValues={data}>
        {formik => (
          <Form className={styles.div} encType="multipart/form-data">
            <p className={styles.field}>Add photo</p>
            {(formik.values.photo && (
              <PreviewImage file={formik.values.photo} />
            )) || (
              <>
                <input
                  className={styles.input}
                  type="file"
                  id="file"
                  onChange={event => {
                    formik.setFieldValue(`photo`, event.target.files[0]);
                  }}
                ></input>
                <label htmlFor="file" className={styles.upload}>
                  <Plus className={styles.plus}></Plus>
                </label>
              </>
            )}

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
            <div className={styles.controls}>
              <button
                type="submit"
                className={styles.next}
                // onClick={() => finish(formik.values)}
              >
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
