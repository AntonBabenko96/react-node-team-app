import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';

import styles from './AlredyLeavingModal.module.scss';

const AlreadyLeavingModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <Modal>
      <div>
        <h1>Already leaving?</h1>
        <div className={styles.modalButtons}>
          <button className={styles.btnClose} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.btnYes} onClick={handleLogout}>
            Yes <LogoutIcon className={styles.logoutIcon} />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AlreadyLeavingModal;
