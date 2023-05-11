import { NavLink } from 'react-router-dom';
import menuItems from './navMenuItems';
import style from './Nav.module.scss';
import { useState } from 'react';

const Nav = () => {
  const [active, setActive] = useState(false);

  const elements = menuItems.map(({ id, link, text }) => (
    <li key={id}>
      <NavLink to={link} className={`${style.link}`}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <>
      <ul className={`${style.headerNav} ${active === true ? 'active' : ''}`}>
        {elements}
      </ul>
      <div className={style.burger} onClick={() => setActive(!active)}></div>
    </>
  );
};

export default Nav;
