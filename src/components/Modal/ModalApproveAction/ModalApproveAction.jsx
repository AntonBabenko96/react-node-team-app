import React, { useState } from 'react';
import axios from 'axios';

import Modal from '../Modal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from './ModalApproveAction.scss';

import '../ModalApproveAction/';

export const ModalApproveAction = (onClose, { name }) => {
  const [setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete('/api/advertisement');
      console.log(response.data);

      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <h1>Delete advertisement?</h1>
      <p>
        Are you sure you want to delete <strong>{name}</strong>? You can`t undo
        this action.
      </p>
      <div>
        <button onClick={closeModal} className={styles.btnClose}>
          Cancel
        </button>
        <button onClick={handleDelete}>
          Yes <DeleteForeverIcon />
        </button>
      </div>
    </Modal>
  );
};
