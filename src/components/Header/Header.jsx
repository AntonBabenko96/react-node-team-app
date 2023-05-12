import AuthNav from './AuthNav/AuthNav';
import Navigation from './Navigation/Navigation';
import styles from './Header.module.scss';
import useMediaQuery from 'shared/hooks/useMediaQuery';

export default function Header() {
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Navigation />
        {isTablet && <AuthNav />}

      </div>
    </header>
  );
}
