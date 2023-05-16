import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field } from 'formik';
import styles from './Calendar.module.scss';

export const Calendar = () => {
  const currentDate = new Date();
  return (
    <Field className={styles.input}>
      {({ form, field }) => {
        const { setFieldValue } = form;
        const { value } = field;
        return (
          <ReactDatePicker
            className={styles.calendar}
            selected={value.dateOfBirth}
            dateFormat="dd/MM/yyyy"
            maxDate={currentDate}
            onChange={val => {
              setFieldValue('dateOfBirth', val);
              console.log(val.getTime());
            }}
          />
        );
      }}
    </Field>
  );
};
