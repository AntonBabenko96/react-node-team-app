import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import Modal from '../Modal';
import { selectIsLogin, selectLoading } from '../../../redux/auth/selectors';
import styles from './CongratsModal.module.scss'

export default function CongratsModal () {
    const [showModal, setShowModal] = useState(false);
    const isLogin = useSelector(selectIsLogin);
    const isLoading = useSelector(selectLoading);
  
    const location = useLocation();
  
   
    const isRedirectedFromRegister = location.pathname === '/register';
    console.log(location)
  
    useEffect(() => {
      if (!isLoading && isLogin && isRedirectedFromRegister) {
        setShowModal(true);
      }
    }, [isLoading, isLogin, isRedirectedFromRegister]);
  
    return (
      <>
        {showModal && !isLoading && isLogin && (
          <Modal onClose={() => setShowModal(false)} style={{ width: '608px' }}>
            <h1>Congrats!</h1>
            <p className={styles.text} >Your registration is successful</p>
            <button className={styles.modalBtn} onClick={() => setShowModal(false)}>
              Go to profile <PetsIcon className={styles.modalIcon} />
            </button>
          </Modal>
        )}
      </>
    );
  };