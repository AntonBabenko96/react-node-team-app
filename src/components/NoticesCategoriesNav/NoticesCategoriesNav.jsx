import Style from './NoticesCategoriesNav.module.scss';
import {
  getNotices,
  getFavoritesList,
  getMyNotices,
} from '../../redux/notices/notices-operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

const mainCategoriesList = [
  { id: 1, value: 'sell', name: 'sell' },
  { id: 2, value: 'lost-found', name: 'lost/found' },
  { id: 3, value: 'for-free', name: 'in good hands' },
];
const userCategoriesList = [
  { id: 4, value: 'favorite-ads', name: 'favorite ads' },
  { id: 5, value: 'my-adss', name: 'my adss' },
];

export default function NoticesCategoriesNav() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const filterСhange = e => {
    let value = e.target.name;
    const fetch = {
      category: value,
      page: 1,
      limit: 20,
    };
    dispatch(getNotices(fetch));
  };
  const filterСhangeUser = e => {
    switch (e.target.name) {
      case 'favorite-ads':
        dispatch(getFavoritesList());
        break;
      default:
        dispatch(getMyNotices());
        break;
    }
  };

  const mainCategories = mainCategoriesList.map(({ id, value, name }) => (
    <NavLink to={`/notices/${value}`} key={id}>
      <button
        name={value}
        type="button"
        className={Style.categoriesbtn}
        onClick={filterСhange}
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
      onClick={filterСhangeUser}
    >
      {name}
    </button>
    </NavLink>
  ));

return (
    <div className={Style.categoryBtns}>
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
