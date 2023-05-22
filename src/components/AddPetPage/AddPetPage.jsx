import React, { useState } from 'react';
import AddPetPageHeader from './AddPetPageHeader/AddPetPageHeader';
import { Navigate, useLocation } from 'react-router-dom';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import ThirdStep from './ThirdStep/ThirdStep';
import styles from './AddPetPage.module.scss';
import { useDispatch } from 'react-redux';
import { addNotice, addPet } from 'redux/pets/pets-operations';
import { createRequestData } from './CreateRequestData/CreateRequestData';
import { addPetLoading } from 'redux/pets/pets-selectors';
import { useSelector } from 'react-redux';

const stateInitialValue = {
  category: '',
  petName: '',
  dateOfBirth: '',
  type: '',
  breed: '',
  photo: null,
  comments: '',
  sex: '',
  location: '',
  price: '',
  title: '',
};
export default function AddPetPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState(stateInitialValue);
  const [created, setCreated] = useState(false);
  const location = useLocation();
  const isLoading = useSelector(addPetLoading);
  const dispatch = useDispatch();

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

  const handleFormSubmit = values => {
    setState(prev => ({ ...prev, ...values }));
    handleNextStep();
  };

  const handleFinish = async values => {
    setState(prev => ({ ...prev, ...values }));
    setCreated(true);
    const data = createRequestData(state, values);

    // for (const pair of data.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }

    state.category === 'my pet'
      ? dispatch(addPet(data))
      : dispatch(addNotice(data));

    // navigate(location.state?.pathname || `/`);
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
      path={`${location.state?.pathname}${location.state?.search}` || `/`}
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
    <section className={styles.petSection}>
      {created && !isLoading && (
        <Navigate
          to={`${location.state?.pathname}${location.state?.search}` || `/`}
        />
      )}
      <div className="container" style={{ marginTop: `40px` }}>
        <div className={styles.form}>
          {currentStep === 0 && <h2 className={styles.title}>Add pet</h2>}
          {currentStep !== 0 && (
            <AddPetPageHeader data={getTitle()}></AddPetPageHeader>
          )}
          <div className={styles.stepWrapper}>
            <h3 className={stepStyle(0)}>
              Choose option <span className={borderStyle(0)}></span>
            </h3>

            <h3 className={stepStyle(1)}>
              Personal details<span className={borderStyle(1)}></span>
            </h3>
            <h3 className={stepStyle(2)}>
              More info<span className={borderStyle(2)}></span>
            </h3>
          </div>
          {steps[currentStep]}
        </div>
      </div>
    </section>
  );
}
