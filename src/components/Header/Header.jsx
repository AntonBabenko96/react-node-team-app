import AuthNav from './AuthNav/AuthNav';
import style from './Header.module.scss';
import Navigation from './Navigation/Navigation';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Navigation />
        <AuthNav />
      </div>
    </header>
  );
}
