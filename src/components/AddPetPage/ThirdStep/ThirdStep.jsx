import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PreviewImage from '../PreviewImage/PreviewImage';
import { addPetLoading } from 'redux/pets/pets-selectors';
import { useSelector } from 'react-redux';

import styles from './ThirdStep.module.scss';
import { ReactComponent as Arrow } from '../../../img/svg/arrow-left.svg';
import { ReactComponent as Paw } from '../../../img/svg/pawprint.svg';
import { ReactComponent as Plus } from '../../../img/svg/plus.svg';
import { ReactComponent as Trash } from '../../../img/svg/trash.svg';
import { ReactComponent as Male } from '../../../img/svg/male.svg';
import { ReactComponent as Female } from '../../../img/svg/female.svg';

function ThirdStep({ data, prev, finish }) {
  const showSex = data.category === 'my pet' ? false : true;
  const location = data.category === 'my pet' ? false : true;
  const price = data.category === 'sell' ? true : false;

  const isLoading = useSelector(addPetLoading);

  const validationSchema = Yup.object({
    photo: Yup.mixed()
      .required()
      .label(`Photo`)
      .test(
        'FILE_SIZE',
        'File is too large!',
        value => value && value.size < 1024 * 1024
      )
      .test(
        'FILE_TYPE',
        'Unsupported file format!',
        value => value && ['image/png', 'image/jpeg'].includes(value.type)
      ),
    comments: Yup.string()
      .min(8, '8 characters minimum')
      .max(160, '160 characters maximum')
      .required('Leave a comment'),
    sex: showSex ? Yup.string().required('Choose gender') : Yup.string(),
    location: location
      ? Yup.string().required().label('Location')
      : Yup.string(),
    price: price
      ? Yup.number().required().label(`Price`).typeError(`Must be a number`)
      : Yup.string(),
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
        validateOnBlur={false}
        initialValues={data}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className={styles.div} encType="multipart/form-data">
            <div className={styles.position}>
              {showSex && (
                <div className={styles.sex}>
                  <Field
                    type="radio"
                    id="choice2"
                    name="sex"
                    value="female"
                  ></Field>
                  <label htmlFor="choice2">
                    <Female className={styles.female}></Female>Female
                  </label>
                  <Field
                    type="radio"
                    id="choice1"
                    name="sex"
                    value="male"
                  ></Field>
                  <label htmlFor="choice1">
                    <Male className={styles.male}></Male>Male
                  </label>

                  <FormError className={styles.error} name="sex" />
                </div>
              )}

              <div className={styles.uploadwrapper}>
                <p className={styles.uploadlabel}>Add photo</p>
                {(values.photo && (
                  <>
                    <PreviewImage file={values.photo} />
                    <button
                      className={styles.trashBtn}
                      onClick={() => {
                        setFieldValue(`photo`, null);
                      }}
                    >
                      <Trash className={styles.trash}></Trash>
                    </button>
                  </>
                )) || (
                  <>
                    <input
                      className={styles.hidden}
                      type="file"
                      id="file"
                      name="photo"
                      onChange={event => {
                        setFieldValue(`photo`, event.target.files[0]);
                      }}
                    ></input>
                    <label htmlFor="file" className={styles.upload}>
                      <Plus className={styles.plus}></Plus>
                    </label>
                  </>
                )}
                <FormError className={styles.error} name="photo" />
              </div>

              {location && (
                <label className={styles.field}>
                  Location
                  <Field
                    className={
                      errors.location && touched.location
                        ? styles.errorField
                        : styles.input
                    }
                    type="text"
                    name="location"
                    placeholder="Enter location"
                  ></Field>
                  <FormError className={styles.error} name="location" />
                </label>
              )}

              {price && (
                <label className={styles.field}>
                  Price
                  <Field
                    className={
                      errors.price && touched.price
                        ? styles.errorField
                        : styles.input
                    }
                    type="text"
                    name="price"
                    placeholder="Enter price"
                  ></Field>
                  <FormError className={styles.error} name="price" />
                </label>
              )}

              <label className={styles.field}>
                Comments
                <Field
                  className={
                    errors.comments && touched.comments
                      ? styles.commentsError
                      : styles.comments
                  }
                  as="textarea"
                  type="text"
                  name="comments"
                  placeholder="Tell something about your pet"
                ></Field>
                <FormError className={styles.error} name="comments" />
              </label>
            </div>

            <div className={styles.controls}>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className={styles.next}
                >
                  Done
                  <Paw className={styles.icon}></Paw>
                </button>
              )}

              <button
                type="submit"
                className={styles.prev}
                onClick={() => prev(values)}
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
