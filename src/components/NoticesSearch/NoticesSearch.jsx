import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import style from './NoticesSearch.module.scss';

export default function NoticesSearch() {
  // eslint-disable-next-line no-unused-vars
  const [_, setHasClose] = useState(false);
  const [query, setQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [_unused, SetSearchParams] = useSearchParams({});


  const handleInput = event => {
    const inputValue = event.target.value;
    setQuery(inputValue.toLowerCase());
  };

  const clearQuery = () => {
    setQuery('');
    setHasClose(false);
  };
  const onSubmit = event => {
    event.preventDefault();
  
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      Notify.warning('Please enter your search parameters');
      return;
    }
  
    SetSearchParams({ search: trimmedQuery });
  };

  const onClickSearch = (event) => {
    if (!query) {
      Notify.warning('Please enter your search parameters');
    } else {
      onSubmit(event);
    }
  };

  return (
    <form className={style.box} onSubmit={onSubmit}>
      <input
        className={style.input}
        name="findpets"
        type="text"
        value={query}
        placeholder="Search"
        onChange={handleInput}
      />
      <button className={style.btn} type="submit" onClick={onClickSearch}>
        {query && (
          <AiOutlineClose
            style={{
              position: 'absolute',
              top: 12,
              right: 16,
              border: 'none',
              outline: 'none',
              fill: '#FFC107',
              cursor: 'pointer',
              width: 19,
              height: 19,
            }}
            onClick={clearQuery}
          />
        )}
        <BsSearch
          style={{
            position: 'absolute',
            top: 14,
            right: query ? 45 : 16,
            border: 'none',
            outline: 'none',
            fill: '#54ADFF',
            cursor: 'pointer',
            width: 17,
            height: 17,
          }}
        />
      </button>
    </form>
  );
}
