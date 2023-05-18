import React from 'react';
import style from './LogOutButton.module.scss'
import {  useNavigate } from 'react-router-dom';

import { ReactComponent as LogoutIcon } from 'img/svg/logout.svg';


import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';


export default function LogOutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate('/notices/sell');
  };

  return (
    <button className={style.btn} onClick={handleLogoutClick}>
         <LogoutIcon className={style.icon} />
              <p className={style.text}>Log Out</p>
      {/* <img className={style.icon} src={Icon} alt="logout logo" />
      <p className={style.text}>Log out</p> */}
    </button>
  );
}
