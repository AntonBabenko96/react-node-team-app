import styles from './AuthBtn.module.scss';

const AuthBtn = ({ title, children }) => {
  const className =
    title === 'Registration'
      ? `${styles.btn} ${styles.register}`
      : `${styles.btn} ${styles.login}`;

  return (
    <button type="submit" className={className}>
      {title}
      {children}
    </button>
  );
};

export default AuthBtn;
