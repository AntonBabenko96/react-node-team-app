import React from 'react';
import style from './LogOutButton.module.scss'
import Icon from '../../img/svg/logout.svg'


export default function LogOutButton() {
    const handleLogoutClick = () => {
    //   тут функція яка виклика логаут
      };


      return (
        <button className={style.btn} onClick={handleLogoutClick}>
            <img className={style.icon} src={Icon} alt='logout logo'/>
            <p className={style.text}>Log out</p>
        </button>
      )
}

