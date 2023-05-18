import { ReactComponent as CameraIcon } from 'img/svg/camera.svg';
import { ReactComponent as EditIcon } from 'img/svg/edit.svg';


import { ReactComponent as LogoutIcon } from 'img/svg/logout.svg';
import { ReactComponent as DefaultIcon } from 'img/svg/photo-default.svg';
import { ReactComponent as CheckIcon } from 'img/svg/check.svg';
import { useState, useEffect, useRef } from 'react';
import { selectUser, selectIsLogin } from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo, updateUserInfo } from 'redux/auth/auth-operations';


import LogOutButton from 'components/LogOutButton/LogOutButton';

import styles from './UserInfo.module.scss';

export default function UserInfo() {
  const userInfo = useSelector(selectUser);

  const isLogin = useSelector(selectIsLogin);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [birthdayValue, setBirthdayValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [cityValue, setCityValue] = useState('');

  const [isNameEdit, setIsNameEdit] = useState(false);
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [isBirthdayEdit, setIsBirthdayEdit] = useState(false);
  const [isPhoneEdit, setIsPhoneEdit] = useState(false);
  const [isCityEdit, setIsCityEdit] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      setNameValue(userInfo.name || '');
      setEmailValue(userInfo.email || '');
      setBirthdayValue(formatBirthday(userInfo.birthday) || '');
      setPhoneValue(userInfo.phone || '');
      setCityValue(userInfo.city || '');
    }
  }, [userInfo]);

  useEffect(() => {
    if (isLogin) {
      dispatch(getUserInfo());
    }
  }, [dispatch, isLogin]);

  const handleNameEditClick = () => {
    setIsNameEdit(true);
    setIsEmailEdit(false);
    setIsBirthdayEdit(false);
    setIsPhoneEdit(false);
    setIsCityEdit(false);
  };

  const handleEmailEditClick = () => {
    setIsEmailEdit(true);
    setIsNameEdit(false);
    setIsBirthdayEdit(false);
    setIsPhoneEdit(false);
    setIsCityEdit(false);
  };

  const handleBirthdayEditClick = () => {
    setIsBirthdayEdit(true);
    setIsNameEdit(false);
    setIsEmailEdit(false);
    setIsPhoneEdit(false);
    setIsCityEdit(false);
  };

  const handlePhoneEditClick = () => {
    setIsPhoneEdit(true);
    setIsNameEdit(false);
    setIsEmailEdit(false);
    setIsBirthdayEdit(false);
    setIsCityEdit(false);
  };

  const handleCityEditClick = () => {
    setIsCityEdit(true);
    setIsNameEdit(false);
    setIsEmailEdit(false);
    setIsBirthdayEdit(false);
    setIsPhoneEdit(false);
  };

  const handleNameInputChange = e => {
    setNameValue(e.target.value);
  };

  const handleEmailInputChange = e => {
    setEmailValue(e.target.value);
  };

  const handleBirthdayInputChange = e => {
    setBirthdayValue(e.target.value);
  };

  const handlePhoneInputChange = e => {
    setPhoneValue(e.target.value);
  };

  const handleCityInputChange = e => {
    setCityValue(e.target.value);
  };

  const handleNameInputBlur = () => {
    setIsNameEdit(false);
    dispatch(updateUserInfo({ name: nameValue }));
  };

  const handleEmailInputBlur = () => {
    setIsEmailEdit(false);
    dispatch(updateUserInfo({ email: emailValue }));
  };

  const handleBirthdayInputBlur = () => {
    setIsBirthdayEdit(false);
    dispatch(updateUserInfo({ birthday: birthdayValue }));
  };

  const handlePhoneInputBlur = () => {
    setIsPhoneEdit(false);
    dispatch(updateUserInfo({ phone: phoneValue }));
  };

  const handleCityInputBlur = () => {
    setIsCityEdit(false);
    dispatch(updateUserInfo({ city: cityValue }));
  };

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const birthdayInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const cityInputRef = useRef(null);

  useEffect(() => {
    if (isNameEdit) {
      nameInputRef.current.focus();
    }
    if (isEmailEdit) {
      emailInputRef.current.focus();
    }
    if (isBirthdayEdit) {
      birthdayInputRef.current.focus();
    }
    if (isPhoneEdit) {
      phoneInputRef.current.focus();
    }
    if (isCityEdit) {
      cityInputRef.current.focus();
    }
  }, [isNameEdit, isEmailEdit, isBirthdayEdit, isPhoneEdit, isCityEdit]);

  const formatBirthday = birthday => {
    const date = new Date(birthday);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${day}.${month}.${year}`;
  };

  return (
    <div>
      <div className={styles.infobox}>
        <div className={styles.decktop}>
          <div className={styles.photo}>
            {userInfo && userInfo.avatarURL && userInfo.avatarURL !== '' ? (
              <img
                className={styles.userAvatar}
                src={userInfo.avatarURL}
                alt="userAvatar"
                width="182px"
                height="182px"
              />
            ) : (
              <DefaultIcon className={styles.user__icon} />
            )}
          </div>
          <div className={styles.camera__title}>
            <CameraIcon className={styles.user__camera} />
            <p className={styles.edit}>Edit photo</p>
          </div>
        </div>
        <div className={styles.decktop}>
          <div className={styles.information}>
            <label className={styles.text}>
              Name:
              {isNameEdit ? (
                <>
                  <input
                    ref={nameInputRef}
                    onChange={handleNameInputChange}
                    onBlur={handleNameInputBlur}
                    name="name"
                    className={styles.input}
                    value={nameValue}
                  />
                  <CheckIcon
                    className={styles.check__icon}
                    onClick={handleNameInputBlur}
                  />
                </>
              ) : (
                <>
                  <input
                    name="name"
                    className={styles.input}
                    value={nameValue}
                    readOnly
                  />
                  <EditIcon
                    className={styles.edit__icon}
                    onClick={handleNameEditClick}
                  />
                </>
              )}
            </label>

            <label className={styles.text}>
              Email:
              {isEmailEdit ? (
                <>
                  <input
                    ref={emailInputRef}
                    onChange={handleEmailInputChange}
                    onBlur={handleEmailInputBlur}
                    name="email"
                    className={styles.input}
                    value={emailValue}
                  />
                  <CheckIcon
                    className={styles.check__icon}
                    onClick={handleEmailInputBlur}
                  />
                </>
              ) : (
                <>
                  <input
                    name="email"
                    className={styles.input}
                    value={emailValue}
                    readOnly
                  />
                  <EditIcon
                    className={styles.edit__icon}
                    onClick={handleEmailEditClick}
                  />
                </>
              )}
            </label>

            <label className={styles.text}>
              Birthday:
              {isBirthdayEdit ? (
                <>
                  <input
                    ref={birthdayInputRef}
                    onChange={handleBirthdayInputChange}
                    onBlur={handleBirthdayInputBlur}
                    name="birthday"
                    className={styles.input}
                    value={birthdayValue}
                  />
                  <CheckIcon
                    className={styles.check__icon}
                    onClick={handleBirthdayInputBlur}
                  />
                </>
              ) : (
                <>
                  <input
                    name="birthday"
                    className={styles.input}
                    value={birthdayValue}
                    readOnly
                  />
                  <EditIcon
                    className={styles.edit__icon}
                    onClick={handleBirthdayEditClick}
                  />
                </>
              )}
            </label>

            <label className={styles.text}>
              Phone:
              {isPhoneEdit ? (
                <>
                  <input
                    ref={phoneInputRef}
                    onChange={handlePhoneInputChange}
                    onBlur={handlePhoneInputBlur}
                    name="phone"
                    className={styles.input}
                    value={phoneValue}
                  />
                  <CheckIcon
                    className={styles.check__icon}
                    onClick={handlePhoneInputBlur}
                  />
                </>
              ) : (
                <>
                  <input
                    name="phone"
                    className={styles.input}
                    value={phoneValue}
                    readOnly
                  />
                  <EditIcon
                    className={styles.edit__icon}
                    onClick={handlePhoneEditClick}
                  />
                </>
              )}
            </label>

            <label className={styles.text}>
              City:
              {isCityEdit ? (
                <>
                  <input
                    ref={cityInputRef}
                    onChange={handleCityInputChange}
                    onBlur={handleCityInputBlur}
                    name="city"
                    className={styles.input}
                    value={cityValue}
                  />
                  <CheckIcon
                    className={styles.check__icon}
                    onClick={handleCityInputBlur}
                  />
                </>
              ) : (
                <>
                  <input
                    name="city"
                    className={styles.input}
                    value={cityValue}
                    readOnly
                  />
                  <EditIcon
                    className={styles.edit__icon}
                    onClick={handleCityEditClick}
                  />
                </>
              )}
            </label>
 <div className={styles.logout}>
              <LogOutButton/>
              {/* <LogoutIcon className={styles.logout__icon} />
              <p className={styles.logout__text}>Log Out</p> */}
            </div>
          </div>
<
//           <div className={styles.decktop}>
//             <div className={styles.information}>
//               < p className={styles.text}>
//                 Name: <input className={styles.input}></input><EditIcon className={styles.edit__icon} />
//               </p>

//               <p className={styles.text}>
//                 Email: <input className={styles.input}></input><EditIcon className={styles.edit__icon} />
//               </p>

//               <p className={styles.text}>
//                 Birthday: <input className={styles.input}></input><EditIcon className={styles.edit__icon} />
//               </p>

//               <p className={styles.text}>
//                 Phone:<input className={styles.input}></input><EditIcon className={styles.edit__icon} />
//               </p>

//               <p className={styles.text}>
//                 City:<input className={styles.input}></input><EditIcon className={styles.edit__icon} />
//               </p>
//             </div>
           

//           </div>
        </div>
      </div>
    </div>
  );
}
