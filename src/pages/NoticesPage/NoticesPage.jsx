import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import Paginations from 'components/Pagination/Pagination';
import { useState } from 'react';

// import { useState } from 'react';

import s from './NoticesPage.module.scss';

export default function NoticesPage() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const getPage = paginationPage => {
    // Отримання даних з дочірнього компонента Pagination
    setPage(paginationPage);
  };
  // const [query, setQuery] = useState('');

  // const handleSearch = (query) => {
  //   setQuery(query);

  // };

  return (
    <section>
      <div className="container">
        <h1 className={s.title}>Find your favorite pet</h1>
        <NoticesSearch />
        <NoticesCategoriesNav />
        <NoticesCategoriesList />
        <Paginations getPage={getPage} count={count} />
      </div>
    </section>
  );
}
