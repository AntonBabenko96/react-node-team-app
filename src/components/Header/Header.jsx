import AuthNav from './AuthNav/AuthNav';
import Navigation from './Navigation/Navigation';
import styles from './Header.module.scss';
import useMediaQuery from 'shared/hooks/useMediaQuery';
import UserNav from 'components/UserNav/UserNav';
import { selectIsLogin } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function Header() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isLogin = useSelector(selectIsLogin);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Navigation />
        {isTablet && !isLogin && <AuthNav />}
        {isLogin && <UserNav />}
      </div>
    </header>
  );
}
