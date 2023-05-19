import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setNewUser } from 'redux/auth/auth-slice';
import PetsIcon from '@mui/icons-material/Pets';
import Modal from '../Modal';
import { selectLoading, selectNewUser } from '../../../redux/auth/selectors';
import styles from './CongratsModal.module.scss';

export default function CongratsModal() {
  const [showModal, setShowModal] = useState(false);
  // const isLogin = useSelector(selectIsLogin);
  const isLoading = useSelector(selectLoading);
  const newUser = useSelector(selectNewUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPath = location.pathname;

  useEffect(() => {
    if (!isLoading && newUser && currentPath === '/user') {
      setShowModal(true);
    }
  }, [isLoading, newUser, currentPath]);

  const handleClose = () => {
    setShowModal(false);
    dispatch(setNewUser(false));
  };

  return (
    <>
      {showModal && (
        <Modal onClose={handleClose} style={{ width: '608px' }}>
          <h1>Congrats!</h1>
          <p className={styles.text}>Your registration is successful</p>
          <button className={styles.modalBtn} onClick={handleClose}>
            Go to profile <PetsIcon className={styles.modalIcon} />
          </button>
        </Modal>
      )}
    </>
  );
}
