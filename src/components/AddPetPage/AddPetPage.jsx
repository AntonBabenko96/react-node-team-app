import React, { useState } from 'react';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import ThirdStep from './ThirdStep/ThirdStep';
import styles from './AddPetPage.module.scss';

const stateInitialValue = {
  petName: '',
  dateOfBirth: '',
  type: '',
  breed: '',
  photo: '',
  comments: '',
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

  const handleFinish = values => {
    setState(prev => ({ ...prev, ...values }));
    console.log(state);
  };

  const stepStyle = position => {
    if (currentStep === position) {
      return styles.current;
    }
    if (currentStep > position) {
      return styles.complete;
    }
    return styles.default;
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
      onSubmit={handleFormSubmit}
    />,
  ];

  return (
    <div className="container">
      <h2>Add pet</h2>
      <div className={styles.stepWrapper}>
        <p className={stepStyle(0)}>Choose option</p>
        <p className={stepStyle(1)}>Personal details</p>
        <p className={stepStyle(2)}>More info</p>
      </div>
      {steps[currentStep]}
    </div>
  );
}
