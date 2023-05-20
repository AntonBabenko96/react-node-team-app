import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getNotices } from 'redux/notices/notices-operations';
import s from './NoticesPage.module.scss';
import { useEffect } from 'react';

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
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();

  const title = params.get('title');
  const category = params.get('category');
  const age = params.get('age');
  const sex = params.get('sex');
  const favorite = params.get('favorite');
  const page = params.get('page');
  const limit = params.get('limit');
  const onlyMine = params.get('only-mine');

  const handleSubmit = () => {
    dispatch(
      getNotices({
        title,
        category,
        age,
        sex,
        favorite,
        page,
        limit,
        'only-mine': onlyMine,
      })
    );
  };

  const setCategory = category => {
    const choice = {};
    switch (category) {
      case 'sell':
        choice.favorite = '';
        choice['only-mine'] = '';
        choice.category = 'sell';
        break;
      case 'lost-found':
        choice.favorite = '';
        choice['only-mine'] = '';
        choice.category = 'lost-found';
        break;
      case 'for-free':
        choice.favorite = '';
        choice['only-mine'] = '';
        choice.category = 'for-free';
        break;
      case 'favorite-ads':
        choice.favorite = 'true';
        choice['only-mine'] = '';
        choice.category = '';
        break;
      case 'my-ads':
        choice.favorite = '';
        choice['only-mine'] = 'true';
        choice.category = '';
        break;
    }
    setParams({ ...Object.fromEntries([...params]), ...choice });
    handleSubmit();
  };
  useEffect(() => {
    setParams(initialState);
    handleSubmit();
  }, []);

  const handleInput = searchString => {
    setParams({ ...Object.fromEntries([...params]), title: searchString });
  };

  const clearSearch = () => {
    setParams(prevParams => {
      return { ...prevParams, title: '' };
    });
  };
  return (
    <>
      <section>
        <div className="container">
          <h1 className={s.title}>Find your favorite pet</h1>
          <NoticesSearch
            handleInput={handleInput}
            value={title}
            handleSubmit={handleSubmit}
            clearSearch={clearSearch}
          />
          <NoticesCategoriesNav handleSubmit={setCategory} />
          <NoticesCategoriesList />
        </div>
      </section>
    </>
  );
}
