import React, { useState } from 'react';
import Nav from './Nav/Nav';
import Logo from '../Logo/Logo';

const Navigation = () => {
  const [active, setActive] = useState(false);

  const onShowMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <Logo setActive={setActive} />
      <Nav onShowMenu={onShowMenu} setActive={setActive} active={active} />
    </>
  );
};

export default Navigation;
