import styles from './ModalButtons.module.scss';

const ModalButtons = ({ title, children }) => {
  const className =
    title === 'Cancel'
      ? `${styles.btn} ${styles.cancel}`
      : `${styles.btn} ${styles.aprove}`;

  return (
    <button type="submit" className={className}>
      {title}
      {children}
    </button>
  );
};

export default ModalButtons;
