import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getNotices } from 'redux/notices/notices-operations';
import s from './NoticesPage.module.scss';
import { useEffect, useState, useCallback } from 'react';

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

export default function NoticesPage() {
  const [searchParams, setSearchParams] = useSearchParams(initialState);
  const dispatch = useDispatch();

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
  }, [title, category, age, sex, favorite, page, limit, onlyMine]);

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
  }, [submit]);

  useEffect(() => {
    submit();
  }, [searchParams, submit]);

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
          <NoticesCategoriesNav handleSubmit={setCategory} />
          <NoticesCategoriesList />
        </div>
      </section>
    </>
  );
}
