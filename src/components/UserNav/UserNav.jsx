import { ReactComponent as SvgImage } from '../../img/svg/user.svg';
import { NavLink } from 'react-router-dom';
import useMediaQuery from 'shared/hooks/useMediaQuery';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import styles from './UserNav.module.scss';

const UserNav = () => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const userInfo = useSelector(selectUser);

  return (
    <NavLink to="/user" className={styles.userLink}>
      <SvgImage className={styles.user} />
      {isTablet && (
        <p className={styles.userName}>{userInfo && userInfo.name}</p>
      )}
    </NavLink>
  );
};

export default UserNav;
