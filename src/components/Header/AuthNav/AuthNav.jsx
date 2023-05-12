import { NavLink } from 'react-router-dom';
import AuthBtn from './AuthBtn/AuthBtn';
import styles from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.item}>
        <NavLink to="/register" className={styles.link}>
          <AuthBtn title="Log IN">
            <svg
              className={styles.paw}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
             
            </svg>
          </AuthBtn>
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={styles.link}>
          <AuthBtn title="Registration"></AuthBtn>
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
