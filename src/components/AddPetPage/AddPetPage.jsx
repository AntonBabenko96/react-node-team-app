import React, { useState, useRef } from 'react';
import AddPetPageHeader from './AddPetPageHeader/AddPetPageHeader';
import { useNavigate, useLocation } from 'react-router-dom';
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

  const location = useLocation();
  console.log(location.state.pathname);
  const refLocation = useRef(location);
  console.log(refLocation);
  const from = `${refLocation.current.state.pathname}` || `/`;
  console.log(from);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(addPetLoading);

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

    const data = createRequestData(state, values);

    // for (const pair of data.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }

    state.category === 'my pet'
      ? dispatch(addPet(data)).then(!isLoading && navigate(from))
      : dispatch(addNotice(data)).then(!isLoading && navigate(from));
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
      from={from}
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
