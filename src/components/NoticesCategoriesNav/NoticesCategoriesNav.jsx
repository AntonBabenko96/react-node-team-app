import Style from './NoticesCategoriesNav.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import FilterButton from 'components/FilterButton/FilterButton';

const categoriesList = [
  { id: 1, value: 'sell', name: 'sell', auth: false },
  { id: 2, value: 'lost-found', name: 'lost/found', auth: false },
  { id: 3, value: 'for-free', name: 'in good hands', auth: false },
  { id: 4, value: 'favorite', name: 'favorite ads', auth: true },
  { id: 5, value: 'only-mine', name: 'my ads', auth: true },
];

export default function NoticesCategoriesNav({ handleSubmit }) {
  const isLogin = useSelector(selectIsLogin);

  const categoriesElements = categoriesList.map(({ id, value, name, auth }) => {
    if ((auth && isLogin) || !auth) {
      return (
        <button
          key={id}
          name={value}
          type="button"
          className={Style.categoriesbtn}
          onClick={() => handleSubmit(value)}
        >
          {name}
        </button>
      );
    } else {
      return null;
    }
  });

  return (
    <div className={`${Style.categoryBtns} container`}>
      <div className={Style.filterCategories}>{categoriesElements}</div>
      <div className={Style.filterBtnCategories}>
        <FilterButton />
        <AddPetButton />
      </div>
    </div>
  );
}
