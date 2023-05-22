import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import style from './NoticesSearch.module.scss';

export default function NoticesSearch({
  onSubmit,
  onChange,
  onReset,
  value = '',
}) {
  return (
    <form
      className={style.box}
      onSubmit={e => {
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <input
        className={style.input}
        name="findpets"
        type="text"
        value={value}
        placeholder="Search"
        onChange={e => onChange(e.target.value)}
      />
      <button className={style.btn} type="submit">
        {value && (
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
            onClick={onReset}
          />
        )}
        <BsSearch
          style={{
            position: 'absolute',
            top: 14,
            right: value ? 45 : 16,
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
