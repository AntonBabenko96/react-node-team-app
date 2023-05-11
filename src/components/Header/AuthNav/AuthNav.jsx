import { NavLink } from 'react-router-dom';
import AuthBtn from './AuthBtn/AuthBtn';
import styles from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.item}>
        <NavLink to="/register" className={styles.link}>
          <AuthBtn title="Log IN"></AuthBtn>
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
