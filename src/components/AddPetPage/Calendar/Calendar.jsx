import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field } from 'formik';
export const Calendar = () => {
  const currentDate = new Date();
  return (
    <Field>
      {({ form, field }) => {
        const { setFieldValue } = form;
        const { value } = field;
        return (
          <ReactDatePicker
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
