import { ReactComponent as SvgImage } from '../../img/svg/user.svg';
import { NavLink } from 'react-router-dom';
import useMediaQuery from 'shared/hooks/useMediaQuery';

import styles from './UserNav.module.scss';

const UserNav = () => {
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <NavLink to="/user" className={styles.userLink}>
      <SvgImage className={styles.user} />
      {isTablet && <p className={styles.userName}>Anna</p>}
    </NavLink>
  );
};

export default UserNav;

// вставити Ім'я з редакс-стору через селектор коли будуть данні
