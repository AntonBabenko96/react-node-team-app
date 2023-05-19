// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';

import css from './Modal.module.scss';

const modalRootEl = document.getElementById('modal-root');


const Modal = ({ className = '', children, onClose }) => {
  useEffect(() => {
    document.body.addEventListener('keydown', handleClose);
    return () => document.body.removeEventListener('keydown', handleClose);
    // eslint-disable-next-line
  }, []);

  const handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleClose} className={css.overlay}>
      <div className={css.modal}>
        <button className={css.button} type="button" onClick={onClose}>
          <CloseIcon className={css.icon}/>
        </button>
        {children}
      </div>
    </div>,
    modalRootEl
  );
};

export default Modal;

// Modal.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
