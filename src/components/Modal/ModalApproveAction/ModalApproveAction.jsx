import { useDispatch } from 'react-redux';
import { deleteMyNotice } from 'redux/notices/notices-operations';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from './ModalApproveAction.module.scss';

export const ModalApproveAction = ({ onClose, _id, title }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteMyNotice(id));
    onClose();
  };

  return (
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
  );
};
