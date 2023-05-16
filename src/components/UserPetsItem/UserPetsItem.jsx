import { ReactComponent as TrashIcon } from 'img/svg/trash.svg';
import styles from './UserPetsItem.module.scss';
import notFoundImg from 'img/placeholder.png';
import Modal from 'components/Modal/Modal';
import React, { useState } from 'react';
import { ReactComponent as SvgImage } from '../../img/svg/trash.svg';
import ModalButtons from './ModalButtons/ModalButtons';
import { useDispatch } from 'react-redux';

import { removePets } from 'redux/pets/pets-operations';

export default function UserPetsItem({
  id,
  photoURL,
  name,
  date,
  breed,
  comments,
}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveItem = (e, id) => {
    dispatch(removePets(id));
    setShowModal(false);
  };

  return (
    <>
      <li className={styles.pets__card} key={id}>
        {photoURL && (
          <img
            className={styles.pets__image}
            src={`https://your-pet-backend.onrender.com/${photoURL}`}
            alt={name}
            width="240"
          />
        )}
        {!photoURL && (
          <img
            className={styles.pets__image}
            src={notFoundImg}
            alt="pets"
            width="240"
          />
        )}
        <div className={styles.pets__content}>
          <div className={styles.trash__name}>
            <p className={styles.text}>
              <span>Name:</span> {name}
            </p>
            <TrashIcon
              className={styles.trash__icon}
              onClick={() => setShowModal(true)}
            />
          </div>
          <p className={styles.text}>
            <span>Date of birth:</span> {date}
          </p>
          <p className={styles.text}>
            <span>Breed:</span> {breed}
          </p>
          <p className={styles.text}>
            <span>Comments:</span> {comments}
          </p>
        </div>
      </li>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className={styles.modalContent}>
            <p className={styles.modalTitle}>Delete pet?</p>{' '}
            <p className={styles.modalText}>
              Are you sure you want to delete "{name}" from your pets? <br />
              You can`t undo this action.
            </p>
            <ul className={styles.buttonList}>
              <li
                key="cancel"
                className={styles.item}
                onClick={() => setShowModal(false)}
              >
                <ModalButtons
                  title="Cancel"
                  className={`${styles.btn} cancel`}
                />
              </li>
              <li
                key="aprove"
                className={styles.item}
                onClick={e => handleRemoveItem(e, id)}
              >
                <ModalButtons title="Yes" className={`${styles.btn} aprove`}>
                  <SvgImage className={styles.trash} />
                </ModalButtons>
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
}
