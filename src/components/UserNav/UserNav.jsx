import { ReactComponent as UserSvg } from '../../img/svg/user-1.svg';
import { NavLink } from 'react-router-dom';
import useMediaQuery from 'shared/hooks/useMediaQuery';
import { useSelector } from 'react-redux';

import styles from './UserNav.module.scss';
import { selectUser } from 'redux/auth/selectors';

const UserNav = () => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <NavLink to="/user" className={styles.userLink}>
      <UserSvg className={styles.user} />
      {!user.name && <p className={styles.userName}>User</p>}
      {isTablet && <p className={styles.userName}>{user.name}</p>}
    </NavLink>
  );
};

export default UserNav;

// вставити Ім'я з редакс-стору через селектор коли будуть данні
