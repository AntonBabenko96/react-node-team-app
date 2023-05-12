import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {BsSearch} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"

import style from './NoticesSearch.module.scss';

export default function NoticesSearch() {
  const [hasClose, setHasClose] = useState(false);
  const [query, setQuery] = useState('');
  const [_, SetSearchParams] = useSearchParams({});

  useEffect(() => {
    if (!query) {
      SetSearchParams({});
      setHasClose(false);
      return;
    }

    SetSearchParams({ search: query });
  }, [query, SetSearchParams]);

  const handleInput = event => {
    setHasClose(true);
    const newQuery = event.target.value.toLowerCase().trim();
    setQuery(newQuery);
  };

  const onClick = () => {
    setHasClose(false);
    SetSearchParams({});
    setQuery('');
  };

  const onClickSearch = () => {
    if (!query) {
      Notify.warning('Please enter your search parameters');
    }
  };

  return (
  
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
          <button className={style.btn} type="submit" onClick={onClickSearch}>
            <BsSearch style={{
                position: 'absolute',
                top: 14,
                right: 16,
                border: "none",
                outline: "none",
                fill: "#54ADFF",
                cursor: "pointer",
                width: 17,
                height: 17,
              }}/>
          </button>
        ) : (
          <button type="submit" onClick={onClick}>
            <AiOutlineClose style={{
                position: 'absolute',
                top: 14,
                right: 16,
                border: "none",
                outline: "none",
                fill: "#54ADFF",
                cursor: "pointer",
                width: 17,
                height: 17,
              }}/>
          </button>
        )}
      </div>
    
  );
}

// import { ReactComponent as SearchIcon } from 'img/svg/search.svg';
// import { ReactComponent as CrossIcon } from 'img/svg/cross.svg';

// export default function NoticesSearch () {
//     return (
//         <form>
//             <input type="text" placeholder='Search'/>
//             <button>
//                 <SearchIcon/>
//             </button>
//             <button type='button'>
//                 <CrossIcon/>
//             </button>
//         </form>
//     )
// }
