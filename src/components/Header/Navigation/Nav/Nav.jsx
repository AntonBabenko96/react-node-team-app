import { NavLink } from 'react-router-dom';
import menuItems from './navMenuItems';

const Nav = () => {
  const elements = menuItems.map(({ id, link, text }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default Nav;
