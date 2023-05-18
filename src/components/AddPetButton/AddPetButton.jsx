import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Notiflix from 'notiflix';

import { selectIsLogin } from 'redux/auth/selectors';

import styles from './AddPetButton.module.scss';

const AddPetButton = () => {

  const isLogin = useSelector(selectIsLogin);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isLogin) {
       navigate('/add-pet');
    } else {
      Notiflix.Notify.failure(
        'Please login or register to add a pet.', 
        {
          timeout: 5000,
        }
      );
    }
  };

  return (
    <button className={styles.button} onClick={handleButtonClick}>
  
        Add Pet
        <AddIcon className={styles.icon} />
     
    </button>
  );
};

export default AddPetButton;
