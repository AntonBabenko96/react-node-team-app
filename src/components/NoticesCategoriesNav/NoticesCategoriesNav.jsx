import Style from './NoticesCategoriesNav.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import FilterButton from 'components/FilterButton/FilterButton';

const mainCategoriesList = [
  { id: 1, value: 'sell', name: 'sell' },
  { id: 2, value: 'lost-found', name: 'lost/found' },
  { id: 3, value: 'for-free', name: 'in good hands' },
];
const userCategoriesList = [
  { id: 4, value: 'favorite-ads', name: 'favorite ads' },
  { id: 5, value: 'my-ads', name: 'my ads' },
];

export default function NoticesCategoriesNav({ handleSubmit }) {
  const isLogin = useSelector(selectIsLogin);

  const mainCategories = mainCategoriesList.map(({ id, value, name }) => (
    <NavLink to={`/notices/${value}`} key={id}>
      <button
        name={value}
        type="button"
        className={Style.categoriesbtn}
        onClick={() => handleSubmit(value)}
      >
        {name}
      </button>
    </NavLink>
  ));
  const userCategories = userCategoriesList.map(({ id, value, name }) => (
    <NavLink to={`/notices/${value}`} key={id}>
      <button
        key={id}
        name={value}
        type="button"
        className={Style.categoriesbtn}
        onClick={() => handleSubmit(value)}
      >
        {name}
      </button>
    </NavLink>
  ));

  return (
    <div className={`${Style.categoryBtns} container`}>
      <div className={Style.filterCategories}>
        {mainCategories}
        {isLogin && userCategories}
      </div>
      <div className={Style.filterBtnCategories}>
        <FilterButton />
        <AddPetButton />
      </div>
    </div>
  );
}
