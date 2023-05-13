import { NavLink } from 'react-router-dom';
import AuthBtn from './AuthBtn/AuthBtn';
import { ReactComponent as SvgImage } from '../../../img/svg/pawprint.svg';
import styles from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.item}>
        <NavLink to="/register" className={styles.link}>
          <AuthBtn title="Log IN">
            <SvgImage className={styles.paw} />
          </AuthBtn>
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/login" className={styles.link}>
          <AuthBtn title="Registration"></AuthBtn>
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;