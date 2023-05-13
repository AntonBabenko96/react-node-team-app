import React, { useState } from 'react';
import AddPetPageHeader from './AddPetPageHeader/AddPetPageHeader';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import ThirdStep from './ThirdStep/ThirdStep';
import styles from './AddPetPage.module.scss';
import axios from 'axios';

const stateInitialValue = {
  category: 'my pet',
  petName: '',
  dateOfBirth: '',
  type: '',
  breed: '',
  photo: null,
  comments: '',
  imageURL: '',
  sex: '',
  location: '',
  price: '',
  title: '',
};
export default function AddPetPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState(stateInitialValue);

  const handleFormSubmit = values => {
    setState(prev => ({ ...prev, ...values }));
    handleNextStep();
  };

  const handleCategory = values => {
    setState(prev => ({ ...prev, category: values }));
  };

  const handleNextStep = values => {
    setState(prev => ({ ...prev, ...values }));
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = values => {
    setState(prev => ({ ...prev, ...values }));
    setCurrentStep(prev => prev - 1);
  };

  const handleFinish = async values => {
    console.log('VALUES', values);
    const data = new FormData();
    const { photo } = values;

    data.append('category', state.category);
    data.append('type', state.type);
    data.append('name', state.petName);
    data.append('breed', state.breed);
    data.append('sex', state.sex);
    data.append('photoURL', photo);
    data.append('location', 'test');

    // data.append('upload_preset', 'zpexg61h');
    // const res = await axios.post(
    //   'https://api.cloudinary.com/v1_1/dotlfyrhf/image/upload',
    //   data
    // );
    // console.log(res.data.secure_url);
    // setState(prev => ({ ...prev, ...values, imageURL: res.data.secure_url }));
    // alert(state.imageURL);

    const instance = axios.create({
      baseURL: 'https://your-pet-backend.onrender.com/',
    });

    instance.defaults.headers.common.authorization =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWZiZWVmMjUyNjQwMjIyMmZiY2U5NiIsImlhdCI6MTY4NDAwMzE1NSwiZXhwIjoxNjg0MDA0MzU1fQ.toPuFbdg2Df7QicV4myLpTjjSN8xZ0oIORffuvituYk';

    const response = await instance.post('/pets', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
    // console.log(state);
    // setCurrentStep(0);
    // setState(stateInitialValue);
  };

  const stepStyle = position => {
    if (currentStep === position) {
      return styles.stepCurrent;
    }
    if (currentStep > position) {
      return styles.stepComplete;
    }
    return styles.stepDefault;
  };

  const borderStyle = position => {
    if (currentStep === position) {
      return styles.borderCurrent;
    }
    if (currentStep > position) {
      return styles.borderComplete;
    }
    return styles.borderDefault;
  };

  const steps = [
    <FirstStep
      data={state.category}
      name="firstStep"
      onSubmit={handleCategory}
      next={handleNextStep}
    />,
    <SecondStep
      data={state}
      name="secondStep"
      next={handleNextStep}
      prev={handlePrevStep}
      onSubmit={handleFormSubmit}
    />,
    <ThirdStep
      data={state}
      name="secondStep"
      finish={handleFinish}
      prev={handlePrevStep}
    />,
  ];
  const getTitle = () => {
    if (state.category === 'sell') {
      return 'Add pet for sale';
    }
    if (state.category === 'lost-found') {
      return 'Add lost pet';
    }
    if (state.category === 'for-free') {
      return 'Add pet for free';
    }
    return 'Add pet';
  };
  return (
    <div className="container">
      <div className={styles.form}>
        {currentStep === 0 && <h2 className={styles.title}>Add pet</h2>}
        {currentStep !== 0 && (
          <AddPetPageHeader data={getTitle()}></AddPetPageHeader>
        )}
        <div className={styles.stepWrapper}>
          <p className={stepStyle(0)}>
            Choose option <span className={borderStyle(0)}></span>
          </p>

          <p className={stepStyle(1)}>
            Personal details<span className={borderStyle(1)}></span>
          </p>
          <p className={stepStyle(2)}>
            More info<span className={borderStyle(2)}></span>
          </p>
        </div>
        {steps[currentStep]}
      </div>
    </div>
  );
}
