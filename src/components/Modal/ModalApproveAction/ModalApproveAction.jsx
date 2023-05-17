// import React, { useState } from 'react';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deleteMyNotice } from 'redux/notices/notices-operations';

// import Modal from '../Modal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from './ModalApproveAction.module.scss';

// import '../ModalApproveAction/';

export const ModalApproveAction = ({ onClose, _id, title }) => {
  // const [setShowModal] = useState(false);

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const dispatch = useDispatch();
  const handleDelete = id => {
    // async () => {
    // try {
    //   const response = await axios.delete('/api/advertisement');
    //   console.log(response.data);

    //   closeModal();
    // } catch (error) {
    //   console.error(error);
    // }
    dispatch(deleteMyNotice(id));
    onClose();
  };

  return (
    // <Modal onClose={onClose}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Delete advertisement?</h1>
      <p className={styles.text}>
        Are you sure you want to delete <strong>{title}</strong>? You can`t undo
        this action.
      </p>
      <div className={styles.modalButtons}>
        <button
          onClick={onClose}
          className={`${styles.button} ${styles.btnClose}`}
        >
          Cancel
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className={`${styles.button} ${styles.btnYes}`}
        >
          Yes <DeleteForeverIcon className={styles.icon} />
        </button>
      </div>
    </div>
    // </Modal>
  );
};
