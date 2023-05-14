import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotices } from 'redux/notices/notices-selectors';
import { getNoticesByCategory } from 'redux/notices/notices-operations';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';

import s from './NoticesCategoriesList.module.scss';
import Modal from 'components/Modal/Modal';
import NoticeModal from 'components/Modal/NoticeModal/NoticeModal';

export default function NoticesCategoriesList() {
  const [showModal, setShowModal] = useState(false);
  const notices = useSelector(getNotices);
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

  const elements = notices.map(
    ({ _id, category, photoURL, title, location, birth, sex, type }) => {
      const yearOfBirth = birth && new Date(birth).getFullYear();
      const difference = birth ? (new Date().getFullYear() - yearOfBirth) : "n/a"
      const age = difference === 1 ? `${difference} year` : `${difference} years`

      return (
        <NoticeCategoryItem
          key={_id}
          category={category}
          img={photoURL}
          title={title}
          place={location}
          age={age}
          sex={sex}
          kind={type}
          onBtnClick={handleLearnMoreBtnClick}
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
