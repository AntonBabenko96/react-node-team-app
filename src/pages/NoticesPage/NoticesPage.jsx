import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesList/NoticesCategoriesList';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import Paginations from 'components/Pagination/Pagination';
import { useState } from 'react';

import s from './NoticesPage.module.scss';

export default function NoticesPage() {

  const [query, setQuery] = useState('');

  const handleSearch = (query) => {
    setQuery(query);
    
  };

  return (
    <section>
      <div className="container">
        <h1 className={s.title}>Find your favorite pet</h1>
        <NoticesSearch onSearch={handleSearch} />
        <NoticesCategoriesNav />
        <NoticesCategoriesList />
        <Paginations />
      </div>
    </section>
  );
}
