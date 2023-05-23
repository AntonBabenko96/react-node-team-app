import { useNavigate } from 'react-router-dom';
import { ReactComponent as CameraIcon } from 'img/svg/camera.svg';
import { ReactComponent as EditIcon } from 'img/svg/edit.svg';
import { ReactComponent as LogoutIcon } from 'img/svg/logout.svg';
import { ReactComponent as DefaultIcon } from 'img/svg/photo-default.svg';
import { ReactComponent as CheckIcon } from 'img/svg/check.svg';
import { useState, useEffect, useRef } from 'react';
import { selectUser, selectIsLogin } from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  getUserInfo,
  updateUserInfo,
  logout,
  updateAvatar,
} from 'redux/auth/auth-operations';
import styles from './UserInfo.module.scss';
import React from 'react';
import Modal from 'components/Modal/Modal';

export default function UserInfo() {
  const navigate = useNavigate();
  const userInfo = useSelector(selectUser);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [fields, setFields] = useState({
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
  });

  const [editField, setEditField] = useState('');

  const inputRefs = {
    name: useRef(null),
    email: useRef(null),
    birthday: useRef(null),
    phone: useRef(null),
    city: useRef(null),
  };

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async event => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('avatar', file);
    await dispatch(updateAvatar(formData));
  };

  useEffect(() => {
    if (userInfo) {
      setFields({
        name: userInfo.name || '',
        email: userInfo.email || '',
        birthday: formatBirthday(userInfo.birthday) || '',
        phone: userInfo.phone || '',
        city: userInfo.city || '',
      });
    }
  }, [userInfo]);

  useEffect(() => {
    if (isLogin) {
      dispatch(getUserInfo());
    }
  }, [dispatch, isLogin]);

  const handleEditClick = field => {
    setEditField(field);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFields(prevFields => ({ ...prevFields, [name]: value }));
  };

  const handleInputBlur = () => {
    if (
      editField &&
      fields[editField] !== userInfo[editField] &&
      fields[editField] !== ''
    ) {
      dispatch(updateUserInfo({ [editField]: fields[editField] }));
    }
    setEditField('');
  };

  const formatBirthday = birthday => {
    const date = new Date(birthday);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${day}.${month}.${year}`;
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate('/notices');
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
          <div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <div className={styles.camera__title}>
              <CameraIcon
                className={styles.user__camera}
                onClick={handleUploadClick}
              />
              <button className={styles.edit} onClick={handleUploadClick}>
                Edit photo
              </button>
            </div>
          </div>
        </div>
        <div className={styles.decktop}>
          <div className={styles.information}>
            <label className={styles.text}>
              <p className={styles.inputTitle}>Name:</p>
              {editField === 'name' ? (
                <>
                  <input
                    ref={inputRefs.name}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    name="name"
                    className={styles.input}
                    value={fields.name}
                  />
                  <CheckIcon
                    className={styles.check__icon}
                    onClick={handleInputBlur}
                  />
                </>
              ) : (
                <>
                  <input
                    name="name"
                    className={styles.input}
                    value={fields.name}
                    readOnly
                  />
                  <EditIcon
                    className={styles.edit__icon}
                    onClick={() => handleEditClick('name')}
                  />
                </>
              )}
            </label>

            <label className={styles.text}>
              <p className={styles.inputTitle}>Email:</p>
              {editField === 'email' ? (
                <>
                  <input
                    ref={inputRefs.email}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    name="email"
                    className={styles.input}
                    value={fields.email}
                  />
                  <CheckIcon
                    className={styles.check__icon}
                    onClick={handleInputBlur}
                  />
                </>
              ) : (
                <>
                  <input
                    name="email"
                    className={styles.input}
                    value={fields.email}
                    readOnly
                  />
                  <EditIcon
                    className={styles.edit__icon}
                    onClick={() => handleEditClick('email')}
                  />
                </>
              )}
            </label>

            <label className={styles.text}>
              <p className={styles.inputTitle}>Birthday:</p>
              {editField === 'birthday' ? (
                <>
                  <input
                    ref={inputRefs.birthday}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    name="birthday"
                    className={styles.input}
                    value={fields.birthday}
                    type="date"
                  />
                  <CheckIcon
                    className={styles.check__icon}
                    onClick={handleInputBlur}
                  />
                </>
              ) : (
                <>
                  <input
                    name="birthday"
                    className={styles.input}
                    value={fields.birthday}
                    readOnly
                  />
                  <EditIcon
                    className={styles.edit__icon}
                    onClick={() => handleEditClick('birthday')}
                  />
                </>
              )}
            </label>

            <label className={styles.text}>
              <p className={styles.inputTitle}>Phone:</p>
              {editField === 'phone' ? (
                <>
                  <input
                    ref={inputRefs.phone}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    name="phone"
                    className={styles.input}
                    value={fields.phone}
                  />
                  <CheckIcon
                    className={styles.check__icon}
                    onClick={handleInputBlur}
                  />
                </>
              ) : (
                <>
                  <input
                    name="phone"
                    className={styles.input}
                    value={fields.phone}
                    readOnly
                  />
                  <EditIcon
                    className={styles.edit__icon}
                    onClick={() => handleEditClick('phone')}
                  />
                </>
              )}
            </label>

            <label className={styles.text}>
              <p className={styles.inputTitle}>City:</p>
              {editField === 'city' ? (
                <>
                  <input
                    ref={inputRefs.city}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    name="city"
                    className={styles.input}
                    value={fields.city}
                  />
                  <CheckIcon
                    className={styles.check__icon}
                    onClick={handleInputBlur}
                  />
                </>
              ) : (
                <>
                  <input
                    name="city"
                    className={styles.input}
                    value={fields.city}
                    readOnly
                  />
                  <EditIcon
                    className={styles.edit__icon}
                    onClick={() => handleEditClick('city')}
                  />
                </>
              )}
            </label>
          </div>
          <div className={styles.logout} onClick={toggleModal}>
            <LogoutIcon className={styles.logout__icon} />
            <p className={styles.logout__text}>Log Out</p>
            {showModal && (
              <Modal onClose={toggleModal}>
                <div className={styles.modal__wrapper}>
                  <p className={styles.question}> Already leaving?</p>
                  <div className={styles.button__wrapper}>
                    <button
                      className={styles.button__question_cancel}
                      onClick={toggleModal}
                    >
                      Cancel
                    </button>
                    <button
                      className={styles.button__question_yes}
                      onClick={handleLogoutClick}
                    >
                      Yes
                      <LogoutIcon className={styles.logout__icon_yes} />
                    </button>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
