import { useState, useEffect, useRef } from 'react';
import { ReactComponent as FilterIcon } from '../../img/svg/filters-3.svg';

import styles from './FilterButton.module.scss';

import FilterBox from './FilterBox/FilterBox';

export default function FilterButton({ genderFilters, ageFilters, onChange }) {
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [isAgeDropdownActive, setAgeDropdownActive] = useState(false);
  const [isGenderDropdownActive, setGenderDropdownActive] = useState(false);
  const buttonElement = useRef();

  const toggleDropdown = () => {
    setDropdownActive(prevState => !prevState);
  };

  const toggleAgeDropdown = () => {
    setAgeDropdownActive(prevState => !prevState);
  };

  const toggleGenderDropdown = () => {
    setGenderDropdownActive(prevState => !prevState);
  };

  useEffect(() => {
    const handleClick = e => {
      if (!e.composedPath().includes(buttonElement.current)) {
        setDropdownActive(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const filterButtonClasses = isDropdownActive
    ? `${styles.dropdown} active`
    : styles.dropdown;

  const modalClasses = isDropdownActive
    ? `${styles.modal} active`
    : styles.modal;

  return (
    <div
      className={filterButtonClasses}
      ref={buttonElement}
      onClick={e => {
        if (e.target === e.currentTarget) {
          toggleDropdown();
        }
      }}
    >
      <span className={styles.header}>Filter</span>
      <FilterIcon />
      <div className={modalClasses}>
        <p className={styles.title}>Filters</p>
        <FilterBox
          items={ageFilters}
          group="age"
          isActive={isAgeDropdownActive}
          onToggleActive={toggleAgeDropdown}
          onChange={onChange}
        />
        <FilterBox
          items={genderFilters}
          group="gender"
          isActive={isGenderDropdownActive}
          onToggleActive={toggleGenderDropdown}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
