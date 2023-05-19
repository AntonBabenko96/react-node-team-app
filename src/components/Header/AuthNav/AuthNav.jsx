import { NavLink } from 'react-router-dom';
import AuthBtn from './AuthBtn/AuthBtn';
import { ReactComponent as SvgImage } from '../../../img/svg/pawprint.svg';
import styles from './AuthNav.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/selectors';

const AuthNav = ({ setActive }) => {
  const isLogin = useSelector(selectIsLogin);

  const navListBtn = (
    <>
      <li className={styles.item} onClick={() => setActive(false)}>
        <NavLink to="/login" className={styles.link}>
          <AuthBtn title="Log IN">
            <SvgImage className={styles.paw} />
          </AuthBtn>
        </NavLink>
      </li>
      <li className={styles.item} onClick={() => setActive(false)}>
        <NavLink to="/register" className={styles.link}>
          <AuthBtn title="Registration"></AuthBtn>
        </NavLink>
      </li>
    </>
  );

  return <ul className={styles.navList}>{!isLogin && navListBtn}</ul>;
};

export default AuthNav;
