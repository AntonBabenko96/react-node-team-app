import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNotices } from 'redux/notices/notices-operations';
import s from './NoticesPage.module.scss';
import { useEffect, useState, useCallback } from 'react';
import {
  selectFavoriteStatus,
  selectNotices,
  selectTotal,
} from 'redux/notices/notices-selectors';
import Paginations from 'components/Pagination/Pagination';

const initialState = {
  category: 'sell',
  title: '',
  age: '',
  sex: '',
  favorite: '',
  page: 1,
  limit: 12,
  'only-mine': '',
};

const ageInitialState = [
  {
    id: 1,
    value: '3-12m',
    label: '3-12 m',
    checked: false,
  },
  {
    id: 2,
    value: '1y',
    label: '1 year',
    checked: false,
  },
  {
    id: 3,
    value: '2y',
    label: '2 years',
    checked: false,
  },
  {
    id: 4,
    value: '3y',
    label: '3 years',
    checked: false,
  },
  {
    id: 5,
    value: '4y',
    label: '4 years',
    checked: false,
  },
  {
    id: 6,
    value: '5y',
    label: '5 years',
    checked: false,
  },
  {
    id: 7,
    value: '6y',
    label: '6 years',
    checked: false,
  },
  {
    id: 8,
    value: '7y',
    label: '7 years',
    checked: false,
  },
  {
    id: 9,
    value: '8plus',
    label: '8 +',
    checked: false,
  },
];

const genderInitialState = [
  {
    id: 1,
    value: 'male',
    label: 'male',
    checked: false,
  },
  {
    id: 2,
    value: 'female',
    label: 'female',
    checked: false,
  },
];

export default function NoticesPage() {
  const [searchParams, setSearchParams] = useSearchParams(initialState);
  const dispatch = useDispatch();
  const favoriteStatus = useSelector(selectFavoriteStatus);
  const [genderFilters, setGenderFilters] = useState(genderInitialState);
  const [ageFilters, setAgeFilters] = useState(ageInitialState);
  const notices = useSelector(selectNotices);
  const count = useSelector(selectTotal);

  const title = searchParams.get('title') || initialState.title;
  const category = searchParams.get('category') || initialState.category;
  const age = searchParams.get('age') || initialState.age;
  const sex = searchParams.get('sex') || initialState.sex;
  const favorite = searchParams.get('favorite') || initialState.favorite;
  const page = searchParams.get('page') || initialState.page;
  const limit = searchParams.get('limit') || initialState.limit;
  const onlyMine = searchParams.get('only-mine') || initialState['only-mine'];

  const [query, setQuery] = useState(title);

  const handleSubmitSearch = query => {
    searchParams.set('title', query);
    setSearchParams(searchParams);
  };

  const handleChangeSearch = query => {
    setQuery(query);
  };

  const handleResetSearch = () => {
    setQuery('');
  };

  const handleFilterCheck = (group, filterID) => {
    let handler;

    if (group === 'age') {
      handler = setAgeFilters;
    } else if (group === 'gender') {
      handler = setGenderFilters;
    } else {
      return console.error(`Group by name ${group} not exist`);
    }

    handler(prevState => {
      const state = prevState.map(state => {
        if (state.id === filterID) {
          state.checked = !state.checked;
        }
        return state;
      });

      return state;
    });
  };

  const createCheckedList = filterList => {
    const checkedList = filterList
      .filter(state => state.checked)
      .map(({ value }) => value);
    return checkedList.join(',');
  };

  useEffect(() => {
    const formattedData = createCheckedList(ageFilters);
    searchParams.set('age', formattedData);
    setSearchParams(searchParams);
  }, [ageFilters, searchParams, setSearchParams]);

  useEffect(() => {
    const formattedData = createCheckedList(genderFilters);
    searchParams.set('sex', formattedData);
    setSearchParams(searchParams);
  }, [genderFilters, searchParams, setSearchParams]);

  const submit = useCallback(() => {
    dispatch(
      getNotices({
        title,
        category,
        age,
        sex,
        favorite,
        page,
        limit,
        onlyMine,
      })
    );
  }, [title, category, age, sex, favorite, page, limit, onlyMine, dispatch]);

  const setCategory = value => {
    handleSubmitSearch('');
    handleResetSearch();

    switch (value) {
      case 'sell':
        searchParams.set('favorite', '');
        searchParams.set('only-mine', '');
        searchParams.set('category', 'sell');
        break;
      case 'lost-found':
        searchParams.set('favorite', '');
        searchParams.set('only-mine', '');
        searchParams.set('category', 'lost-found');
        break;
      case 'for-free':
        searchParams.set('favorite', '');
        searchParams.set('only-mine', '');
        searchParams.set('category', 'for-free');
        break;
      case 'favorite':
        searchParams.set('only-mine', '');
        searchParams.set('category', 'all');
        searchParams.set('favorite', 'true');
        break;
      case 'only-mine':
        searchParams.set('category', 'all');
        searchParams.set('favorite', '');
        searchParams.set('only-mine', 'true');
        break;
      default:
        searchParams.set('category', '');
        searchParams.set('favorite', '');
        searchParams.set('only-mine', '');
    }

    setSearchParams(searchParams);
  };

  useEffect(() => {
    submit();
  }, [searchParams, submit, favoriteStatus]);

  const handleChangePage = useCallback(
    newPage => {
      searchParams.set('page', newPage);
      setSearchParams(searchParams);
      submit();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [searchParams, setSearchParams, submit]
  );

  return (
    <>
      <section>
        <div className="container">
          <h1 className={s.title}>Find your favorite pet</h1>
          <NoticesSearch
            value={query}
            onSubmit={handleSubmitSearch}
            onChange={handleChangeSearch}
            onReset={handleResetSearch}
          />
          <NoticesCategoriesNav
            onCategoryCLick={setCategory}
            active={
              (category === 'all' ? null : category) ||
              (favorite && 'favorite') ||
              (onlyMine && 'only-mine')
            }
            onFilterCheck={handleFilterCheck}
            genderFilters={genderFilters}
            ageFilters={ageFilters}
          />
          <NoticesCategoriesList />
          {notices?.length > 0 && (
            <Paginations
              onChangePage={handleChangePage}
              page={page}
              count={Math.ceil(count / limit)}
            />
          )}
        </div>
      </section>
    </>
  );
}
