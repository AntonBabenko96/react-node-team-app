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
    handleNextStep();
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
    console.log('VALUES', values);
    const data = new FormData();
    const { photo } = values;
    data.append('category', notice);
    data.append('type', state.type);
    data.append('name', state.petName);
    data.append('breed', state.breed);
    data.append('sex', `male`);
    data.append('photoURL', photo);
    // data.append('location', 'test');

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
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWZiZWVmMjUyNjQwMjIyMmZiY2U5NiIsImlhdCI6MTY4Mzk5ODQ3OSwiZXhwIjoxNjgzOTk5Njc5fQ.zq2n3GKTrcdmaF4BiwaDWIdzVXZBpdwOYf1SAb1dmGs';

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
