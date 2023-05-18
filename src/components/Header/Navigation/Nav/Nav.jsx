import { NavLink } from 'react-router-dom';
import menuItems from './navMenuItems';
import style from './Nav.module.scss';
import AuthNav from '../../AuthNav/AuthNav';
import useMediaQuery from 'shared/hooks/useMediaQuery';

const Nav = ({ onShowMenu, active, setActive }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const elements = menuItems.map(({ id, link, text }) => (
    <li
      key={id}
      className={style.headerNavItem}
      onClick={() => setActive(false)}
    >
      <NavLink to={link} className={`${style.link}`}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <>
      <ul className={`${style.headerNav} ${active === true ? 'headerNavActive' : ''}`}>
        {isMobile && <AuthNav setActive={setActive} />}
        {elements}
      </ul>
      <div
        className={`${style.burger} burger ${active === true ? 'headerNavActive' : ''}`}
        onClick={onShowMenu}
      >
        <div className="burgerLines"></div>
      </div>
    </>
  );
};

export default Nav;
