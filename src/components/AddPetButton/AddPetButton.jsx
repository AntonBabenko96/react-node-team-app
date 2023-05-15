import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

import { selectIsLogin } from 'redux/auth/selectors';
import Modal from 'components/Modal/Modal';

import styles from './AddPetButton.module.scss'


const AddPetButton = () => {
  const isLogin = useSelector(selectIsLogin );

  const renderButton = () => {
    if (isLogin ) {
      return (
        <button className={styles.button}>
        <Link to="/add-pet" >
          Add Pet
          <AddIcon className={styles.icon} />
        </Link>
        </button>
      );
    } else {
      return (
        <Modal>
        <div className={styles.notification}>
          Please 
          <Link to="/login" className={styles.link}>login</Link> or 
          <Link to="/register" className={styles.link}>register</Link> to add a pet.
        </div>
        </Modal>
      );
    }
  };

  return (
    <div>
      {renderButton()}
    </div>
  );
};

export default AddPetButton;
