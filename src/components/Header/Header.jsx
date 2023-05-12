import AuthNav from './AuthNav/AuthNav';
import Navigation from './Navigation/Navigation';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Navigation />
        <AuthNav />
      </div>
    </header>
  );
}
