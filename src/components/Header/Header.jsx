import Navigation from './Navigation/Navigation';
import style from './Header.module.scss';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={`container ${style.headerInner}`}>
        <Navigation />
      </div>
    </header>
  );
}
