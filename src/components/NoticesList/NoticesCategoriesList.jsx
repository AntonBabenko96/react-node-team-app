import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotice, selectNotices } from 'redux/notices/notices-selectors';
import { selectIsLogin } from 'redux/auth/selectors';
import { getNoticeById, getNotices } from 'redux/notices/notices-operations';
import {
  addToFavorites,
  removeFromFavorites,
} from 'redux/auth/auth-operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';

import s from './NoticesCategoriesList.module.scss';
import Modal from 'components/Modal/Modal';
import NoticeModal from 'components/Modal/NoticeModal/NoticeModal';
import { getDifference } from 'shared/utils/getDateFormat';
import { ModalApproveAction } from 'components/Modal/ModalApproveAction/ModalApproveAction';

const data = {
  page: 1,
  limit: 12,
};

const categoryItems = [
  { name: 'sell', value: 'sell' },
  { name: 'lost-found', value: 'lost/found' },
  { name: 'for-free', value: 'in good hands' },
];
export default function NoticesCategoriesList() {
  const [showModal, setShowModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const notices = useSelector(selectNotices);
  const notice = useSelector(selectNotice);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotices(data));
  }, [dispatch]);

  useEffect(() => {
    if (isLogin) {
      dispatch(getNotices(data));
    }
  }, [dispatch, isLogin]);

  const handleLearnMoreBtnClick = id => {
    setIsDelete(false);
    dispatch(getNoticeById(id));
    setShowModal(true);
  };

  const handleDeleteBtnClick = id => {
    setIsDelete(true);
    dispatch(getNoticeById(id));
    setShowModal(true);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  const handleFavoriteBtnClick = (id, favorite = false) => {
    if (!isLogin) {
      Notify.info(
        'The option "Add to favorite" is available only to registered users'
      );
    } else {
      favorite
        ? dispatch(removeFromFavorites(id))
        : dispatch(addToFavorites(id));
      setTimeout(() => {
        dispatch(getNotices(data));
      }, 500);
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
      own,
    }) => {
      console.log(birth)
      const age = birth ? getDifference(birth) : 'no data';
      if (location.length > 6) {
        location = location.slice(0, 4) + '...';
      }
      const categoryItem = categoryItems.find(item => item.name === category);
      category = categoryItem.value;
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
          own={own}
          onLearnMoreBtnClick={handleLearnMoreBtnClick}
          onFavoriteBtnClick={handleFavoriteBtnClick}
          onDeleteBtnClick={handleDeleteBtnClick}
        />
      );
    }
  );

  return (
    <>
      <ul className={s.list}>{elements}</ul>
      {showModal && (
        <Modal className="css.noticeModal" onClose={onModalClose}>
          {isDelete ? (
            <ModalApproveAction onClose={onModalClose} {...notice} />
          ) : (
            <NoticeModal
              {...notice}
              notices={{ ...notices }}
              onFavoriteBtnClick={handleFavoriteBtnClick}
            />
          )}
        </Modal>
      )}
    </>
  );
}
