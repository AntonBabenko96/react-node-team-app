import { useState } from 'react';
import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';

import s from './NoticesCategoriesList.module.scss';
import Modal from 'components/Modal/Modal';

const tempNotices = [
  {
    _id: 1,
    category: 'sell',
    imageURL: '',
    location: 'Lviv',
    birth: '1 year',
    sex: 'male',
    kind: 'cat',
  },
  {
    _id: 2,
    category: 'in good hands',
    imageURL: '',
    location: 'Lviv',
    birth: '1 year',
    sex: 'male',
    kind: 'cat',
  },
  {
    _id: 3,
    category: 'sell',
    imageURL: '',
    location: 'Lviv',
    birth: '1 year',
    sex: 'male',
    kind: 'cat',
  },
  {
    _id: 4,
    category: 'sell',
    imageURL: '',
    location: 'Lviv',
    birth: '1 year',
    sex: 'male',
    kind: 'cat',
  },
  {
    _id: 5,
    category: 'sell',
    imageURL: '',
    location: 'Lviv',
    birth: '1 year',
    sex: 'male',
    kind: 'cat',
  },
  {
    _id: 6,
    category: 'sell',
    imageURL: '',
    location: 'Lviv',
    birth: '1 year',
    sex: 'male',
    kind: 'cat',
  },
];

export default function NoticesCategoriesList() {
  const [showModal, setShowModal] = useState(false);

  const handleLearnMoreBtnClick = () => {
    setShowModal(true);
  }

  const onModalClose = () => {
    setShowModal(false);
  };

  const elements = tempNotices.map(
    ({ _id, category, title, location, birth, sex, kind }) => {
      return (
        <NoticeCategoryItem
          key={_id}
          category={category}
          title={title}
          place={location}
          age={birth}
          sex={sex}
          kind={kind}
          onBtnClick={handleLearnMoreBtnClick}
        />
      );
    }
  );

  return (
    <>
      <ul className={s.list}>{elements}</ul>
      {showModal && <Modal onClose={onModalClose}></Modal>}
    </>
  );
}
