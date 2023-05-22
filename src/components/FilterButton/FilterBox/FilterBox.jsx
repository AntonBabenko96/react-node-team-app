import { useRef } from 'react';

import { ReactComponent as ChevronIcon } from '../../../img/svg/chevron-down.svg';

import styles from './FilterBox.module.scss';

export default function FilterBox({
  isActive = false,
  items = [],
  group,
  onToggleActive,
  onChange,
}) {
  const listElement = useRef();

  const elements = items.map(item => {
    return (
      <li key={item.id}>
        <label className={styles.label}>
          <input
            type="checkbox"
            value={item.value}
            name={group}
            onChange={e => onChange(group, item.id)}
            className={styles.input}
            checked={item.checked}
          />
          <span className={styles.checkmark}></span>
          {item.label}
        </label>
      </li>
    );
  });

  const openBtnClassNames = isActive
    ? `${styles.openButton} active`
    : styles.openButton;
  const containerClassNames = isActive
    ? `${styles.container} active`
    : styles.container;

  return (
    <div className={styles.filterBox}>
      <button className={openBtnClassNames} onClick={onToggleActive}>
        <ChevronIcon />
        <span>By {group}</span>
      </button>
      <div className={containerClassNames}>
        <ul className={styles.elements} ref={listElement}>
          {elements}
        </ul>
      </div>
    </div>
  );
}
