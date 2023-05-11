import AuthNav from './AuthNav/AuthNav';
import Navigation from './Navigation/Navigation';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import styles from './Header.module.scss';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <button onClick={toggleModal}>MODAL</button>
        <Navigation />
        <AuthNav />
        {showModal && (
          <Modal onClose={toggleModal}>
            <div className={styles.modal__wrapper}>
              <p className={styles.question}> Congrats!</p>
              <p className={styles.question}> Registration successful</p>
              <div className={styles.button__wrapper}>
                <button className={styles.button__question}>
                  Go to profile
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </header>
  );
}
