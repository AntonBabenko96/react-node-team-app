import { NavLink } from 'react-router-dom';
import menuItems from './navMenuItems';
import style from './Nav.module.scss';
import { useState } from 'react';
import AuthNav from '../../AuthNav/AuthNav';
import useMediaQuery from 'shared/hooks/useMediaQuery';

const Nav = () => {
  const [active, setActive] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const elements = menuItems.map(({ id, link, text }) => (
    <li key={id} className={style.headerNavItem}>
      <NavLink to={link} className={`${style.link}`}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <>
      <ul className={`${style.headerNav} ${active === true ? 'active' : ''}`}>
        {isMobile && <AuthNav />}
        {elements}
      </ul>
      <div
        className={`${style.burger} burger ${active === true ? 'active' : ''}`}
        onClick={() => setActive(!active)}
      >
        <div className="burgerLines"></div>
      </div>
    </>
  );
};

export default Nav;
