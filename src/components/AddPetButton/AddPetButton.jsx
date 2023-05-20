import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Notiflix from 'notiflix';

import { selectIsLogin } from 'redux/auth/selectors';

import styles from './AddPetButton.module.scss';

const AddPetButton = () => {
  const isLogin = useSelector(selectIsLogin);
  const location = useLocation();
  const currentstyle =
    location.pathname === '/user' ? styles.buttonOval : styles.buttonCircle;

  const handleButtonClick = () => {
    Notiflix.Notify.failure('Please login or register to add a pet.', {
      timeout: 5000,
    });
  };

  return (
    <>
      {isLogin ? (
        <Link className={currentstyle} to="/add-pet" state={location}>
          Add Pet
          <AddIcon className={styles.icon} />
        </Link>
      ) : (
        <button
          className={currentstyle}
          state={location}
          onClick={handleButtonClick}
        >
          Add Pet
          <AddIcon className={styles.icon} />
        </button>
      )}
    </>
  );
};

export default AddPetButton;
