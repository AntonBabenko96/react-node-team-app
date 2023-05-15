import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotices } from 'redux/notices/notices-selectors';
import { selectIsLogin } from 'redux/auth/selectors';
import { getNoticesByCategory } from 'redux/notices/notices-operations';
import { addToFavorites } from 'redux/auth/auth-operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';

import s from './NoticesCategoriesList.module.scss';
import Modal from 'components/Modal/Modal';
import NoticeModal from 'components/Modal/NoticeModal/NoticeModal';

export default function NoticesCategoriesList() {
  const [showModal, setShowModal] = useState(false);
  const notices = useSelector(selectNotices);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      category: "sell",
      page: 1,
      limit: 10,
    }
    dispatch(getNoticesByCategory(data))
  }, [dispatch])


  const handleLearnMoreBtnClick = () => {
    setShowModal(true);
  }

  const onModalClose = () => {
    setShowModal(false);
  };

  const handleFavoriteBtnClick = (id) => {
    if(!isLogin) {
      Notify.info('The option "Add to favorite" is available only to registered users')
    } else {
      dispatch(addToFavorites(id));
    }
  }

  const elements = notices.map(
    ({ _id, category, photoURL, title, location, birth, sex, type }) => {
      const yearOfBirth = birth && new Date(birth).getFullYear();
      const difference = birth ? (new Date().getFullYear() - yearOfBirth) : "n/a"
      const age = difference === 1 ? `${difference} year` : `${difference} years`

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
          onLearnMoreBtnClick={handleLearnMoreBtnClick}
          onFavoriteBtnClick={handleFavoriteBtnClick}
        />
      );
    }
  );

  return (
    <>
      <ul className={s.list}>{elements}</ul>
      {showModal && <Modal onClose={onModalClose}>
        <NoticeModal />
        </Modal>}
    </>
  );
}
