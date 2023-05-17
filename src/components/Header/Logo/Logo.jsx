import logo from 'img/header/logo.svg';
import { Link } from 'react-router-dom';
import style from './Logo.module.scss';

const Logo = ({ setActive }) => {
  return (
    <Link to="/main" className={style.logo} onClick={() => setActive(false)}>
      <img src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
