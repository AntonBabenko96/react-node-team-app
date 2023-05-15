import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotice, selectNotices } from 'redux/notices/notices-selectors';
import { selectIsLogin } from 'redux/auth/selectors';
import { getNoticeById, getNotices } from 'redux/notices/notices-operations';
import { addToFavorites } from 'redux/auth/auth-operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';

import s from './NoticesCategoriesList.module.scss';
import Modal from 'components/Modal/Modal';
import NoticeModal from 'components/Modal/NoticeModal/NoticeModal';

export default function NoticesCategoriesList() {
  const [showModal, setShowModal] = useState(false);
  // const [notice, setNotice] = useState('');

  const notices = useSelector(selectNotices);
  const notice = useSelector(selectNotice)
  const isLogin = useSelector(selectIsLogin);
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      category: 'sell',
      page: 1,
      limit: 10,
    };
    dispatch(getNotices(data));
  }, [dispatch]);

  // useEffect(() => {
  //   if (isLogin) {

  //     dispatch(getNotices());
  //   }
  // }, [dispatch, isLogin]);

  const handleLearnMoreBtnClick = (id) => {
    dispatch(getNoticeById(id))
    setShowModal(true);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  const handleFavoriteBtnClick = id => {
    if (!isLogin) {
      Notify.info(
        'The option "Add to favorite" is available only to registered users'
      );
    } else {
      dispatch(addToFavorites(id));
    }
  };

  const elements = notices.map(
    ({
      _id,
      category,
      photoURL,
      title,
      location,
      birth,
      sex,
      type,
      favorite,
    }) => {
      const yearOfBirth = birth && new Date(birth).getFullYear();
      const difference = birth ? new Date().getFullYear() - yearOfBirth : 'n/a';
      const age =
        difference === 1 ? `${difference} year` : `${difference} years`;
      // console.log("id", _id)
      // console.log("favorite", favorite)
      return (
        <NoticeCategoryItem
          key={_id}
          id={_id}
          category={category}
          img={photoURL}
          title={title}
          place={location}
          age={age}
          sex={sex}
          kind={type}
          favorite={favorite}
          onLearnMoreBtnClick={handleLearnMoreBtnClick}
          onFavoriteBtnClick={handleFavoriteBtnClick}
        />
      );
    }
  );

  return (
    <>
      <ul className={s.list}>{elements}</ul>
      {showModal && (
        <Modal onClose={onModalClose}>
          <NoticeModal {...notice}/>
        </Modal>
      )}
    </>
  );
}
