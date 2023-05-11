import logo from 'img/header/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
