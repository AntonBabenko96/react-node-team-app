
import styles from './ModalBtn.module.scss';

const ModalBtn = ({ title, children }) => {
  const className =
    title === 'Go to profile'
      ? `${styles.btn} ${styles.go_to_profile}`
      : `${styles.btn} ${styles.next}`;

  return (
    <button type="submit" className={className}>
      {title}
      {children}
    </button>
  );
};

export default ModalBtn;
