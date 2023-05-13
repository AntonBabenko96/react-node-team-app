import React, { useState } from 'react';

import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import ThirdStep from './ThirdStep/ThirdStep';
import styles from './AddPetPage.module.scss';
import axios from 'axios';

const stateInitialValue = {
  petName: '',
  dateOfBirth: '',
  type: '',
  breed: '',
  photo: null,
  comments: '',
  imageURL: '',
};
export default function AddPetPage() {
  const [notice, setNotice] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState(stateInitialValue);

  const handleFormSubmit = values => {
    setState(prev => ({ ...prev, ...values }));
  };

  const handleNoticeType = data => {
    setNotice(data);
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
    const data = new FormData();
    const { photo } = values;
    data.append('file', photo);
    data.append('upload_preset', 'zpexg61h');
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dotlfyrhf/image/upload',
      data
    );
    console.log(res.data.secure_url);
    setState(prev => ({ ...prev, imageURL: res.data.secure_url }));
    // alert(state.imageURL);
    console.log(state);
    setCurrentStep(0);
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
      data={notice}
      name="firstStep"
      onSubmit={handleNoticeType}
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

  return (
    <div className="container">
      <div className={styles.form}>
        <h2 className={styles.title}>Add pet</h2>
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
