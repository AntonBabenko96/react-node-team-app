import AuthNav from './AuthNav/AuthNav';
import Navigation from './Navigation/Navigation';
import style from './Header.module.scss';

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
