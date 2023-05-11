import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {BsSearch} from "react-icons/bs"

import style from './NoticesSearch.module.scss'

export default function NoticesSearch() {
  const [hasClose, setHasClose] = useState(false);
  const [query, setQuery] = useState('');
  // const [searchParams ,SetSearchParams] = useSearchParams({});

  useEffect(() => {
    if (query === '') {
      // SetSearchParams({});
      setHasClose(false);
      return;
    }

    // SetSearchParams({ search: query });
  }, [query, ]);

  const handleInput = event => {
    setHasClose(true);
    const newQuery = event.target.value.toLowerCase().trim();
    setQuery(newQuery);
  };

  const onClick = () => {
    setHasClose(false);
    // SetSearchParams({});
    setQuery('');
  };

  const onClickSearch = () => {
    if (query === '') {
      Notify.warning('Please enter your search parameters');
    }
  };

  return (
    <>
      <div className={style.box}>
        <input
        className={style.input}
          name="findpets"
          type="text"
          value={query}
          placeholder="Search"
          onChange={handleInput}
        />
         {!hasClose ? (
            <button type='submit' onClick={onClickSearch}></button>
        ) : (
            <button type='submit' onClick={onClick}></button>
        )}
      </div>
    </>
  );
}
