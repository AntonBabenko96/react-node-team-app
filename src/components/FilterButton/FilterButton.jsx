import { useState, useEffect, useRef } from 'react';
import { ReactComponent as FilterIcon } from '../../img/svg/filters-3.svg';

import styles from './FilterButton.module.scss';

import FilterBox from './FilterBox/FilterBox';

const ageInitialState = [
  {
    id: 1,
    value: '3-12m',
    label: '3-12 m',
    checked: false,
  },
  {
    id: 2,
    value: '1y',
    label: '1 year',
    checked: false,
  },
  {
    id: 3,
    value: '2y',
    label: '2 years',
    checked: false,
  },
  {
    id: 4,
    value: '3y',
    label: '3 years',
    checked: false,
  },
  {
    id: 5,
    value: '4y',
    label: '4 years',
    checked: false,
  },
  {
    id: 6,
    value: '5y',
    label: '5 years',
    checked: false,
  },
  {
    id: 7,
    value: '6y',
    label: '6 years',
    checked: false,
  },
  {
    id: 8,
    value: '7y',
    label: '7 years',
    checked: false,
  },
  {
    id: 9,
    value: '8plus',
    label: '8 +',
    checked: false,
  },
];

const genderInitialState = [
  {
    id: 1,
    value: 'male',
    label: 'male',
    checked: false,
  },
  {
    id: 2,
    value: 'female',
    label: 'female',
    checked: false,
  },
];

export default function FilterButton({ onAgeCheck, onGenderCheck }) {
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [isAgeDropdownActive, setAgeDropdownActive] = useState(false);
  const [isGenderDropdownActive, setGenderDropdownActive] = useState(false);
  const [genderFilters, setGenderFilters] = useState(genderInitialState);
  const [ageFilters, setAgeFilters] = useState(ageInitialState);
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

  const handleChecked = (group, filterID) => {
    let handler;

    if (group === 'age') {
      handler = setAgeFilters;
    } else if (group === 'gender') {
      handler = setGenderFilters;
    } else {
      return console.error(`Group by name ${group} not exist`);
    }

    handler(prevState => {
      const state = prevState.map(state => {
        if (state.id === filterID) {
          state.checked = !state.checked;
        }
        return state;
      });

      return state;
    });
  };

  const createCheckedList = filterList => {
    const checkedList = filterList
      .filter(state => state.checked)
      .map(({ value }) => value);
    return checkedList.join(',');
  };

  useEffect(() => {
    const formattedData = createCheckedList(ageFilters);
    console.log(formattedData);

    onAgeCheck(formattedData);
  }, [ageFilters]);

  useEffect(() => {
    const formattedData = createCheckedList(genderFilters);
    onGenderCheck(formattedData);
  }, [genderFilters]);

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
      Filter
      <FilterIcon />
      <div className={modalClasses}>
        <p className={styles.title}>Filters</p>
        <FilterBox
          items={ageFilters}
          group="age"
          isActive={isAgeDropdownActive}
          onToggleActive={toggleAgeDropdown}
          onChange={handleChecked}
        />
        <FilterBox
          items={genderFilters}
          group="gender"
          isActive={isGenderDropdownActive}
          onToggleActive={toggleGenderDropdown}
          onChange={handleChecked}
        />
      </div>
    </div>
  );
}
