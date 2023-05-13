import React from 'react';
import style from './LogOutButton.module.scss'
import Icon from '../../img/svg/logout.svg'

import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';


export default function LogOutButton() {
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <button className={style.btn} onClick={handleLogoutClick}>
      <img className={style.icon} src={Icon} alt="logout logo" />
      <p className={style.text}>Log out</p>
    </button>
  );
}
