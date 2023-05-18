import React, { useState} from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckIcon from '@mui/icons-material/Check';

// import { getNotices } from '../../api/notices';
import styles from './FilterButton.module.scss';

export default function FilterButton({ onFilter }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isAgeDropdownVisible, setAgeDropdownVisible] = useState(false);
  const [isGenderDropdownVisible, setGenderDropdownVisible] = useState(false);
  const [selectedAgeOptions, setSelectedAgeOptions] = useState([]);
  const [selectedGenderOptions, setSelectedGenderOptions] = useState([]);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleAgeDropdown = () => {
    setAgeDropdownVisible(!isAgeDropdownVisible);
  };

  const toggleGenderDropdown = () => {
    setGenderDropdownVisible(!isGenderDropdownVisible);
  };

  const handleOptionChange = (event, optionType) => {
    const option = event.target.value;
    if (optionType === 'age') {
      const selectedOptions = selectedAgeOptions;
      if (selectedOptions.includes(option)) {
        setSelectedAgeOptions(selectedOptions.filter(item => item !== option));
      } else {
        setSelectedAgeOptions([...selectedOptions, option]);
      }
    } else if (optionType === 'gender') {
      const selectedOptions = selectedGenderOptions;
      if (selectedOptions.includes(option)) {
        setSelectedGenderOptions(
          selectedOptions.filter(item => item !== option)
        );
      } else {
        setSelectedGenderOptions([...selectedOptions, option]);
      }
    }
  };
  // const handleFilter = (result) => {
  //   console.log(result);
  // };


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getNotices({
  //         sex: selectedGenderOptions.join(','),
  //         age: selectedAgeOptions.join(','),
  //       });
  //       onFilter(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [selectedAgeOptions, selectedGenderOptions, onFilter]);

  const renderCheckbox = (option, optionType) => {
    const isChecked =
      optionType === 'age'
        ? selectedAgeOptions.includes(option)
        : selectedGenderOptions.includes(option);
    return (
      <label className={styles.customCheckbox}>
        <input
          type="checkbox"
          value={option}
          checked={isChecked}
          className={styles.inputCheck}
          onChange={event => handleOptionChange(event, optionType)}
        />
        <span className={styles.checkmark}>
          {isChecked && <CheckIcon className={styles.checkIcon} />}
        </span>
        {option}
      </label>
    );
  };

  return (
    <div className={styles.filterButton} >
      <div
        className={`${styles.button} ${isDropdownVisible ? styles.active : ''}`}
        onClick={toggleDropdown}
      >
        <span>Filters</span>
        
        <FilterAltOutlinedIcon className={styles.icon} />
      </div>
      {isDropdownVisible && (
        <div className={`${styles.dropdownContent} show`}>
          <p className={styles.filtersTitle}>Filters</p>
          <div className={styles.filterDropdownBtn} onClick={toggleAgeDropdown}>
            {isAgeDropdownVisible ? (
              <ExpandLessIcon className={styles.arrowIcon} />
            ) : (
              <ExpandMoreIcon className={styles.arrowIcon} />
            )}
            By age
          </div>
          {isAgeDropdownVisible && (
            <div className={`${styles.ageDropdown} ${styles.show}`}>
              <div className={styles.filterOption}>
                {renderCheckbox('3-12 m', 'age')}
              </div>
              <div className={styles.filterOption}>
                {renderCheckbox('1 year', 'age')}
              </div>
              <div className={styles.filterOption}>
                {renderCheckbox('2 years', 'age')}
              </div>
            </div>
          )}
          <div
            className={styles.filterDropdownBtn}
            onClick={toggleGenderDropdown}
          >
            {isGenderDropdownVisible ? (
              <ExpandLessIcon className={styles.arrowIcon} />
            ) : (
              <ExpandMoreIcon className={styles.arrowIcon} />
            )}
            By gender
          </div>
          {isGenderDropdownVisible && (
            <div className={`${styles.genderDropdown} ${styles.show}`}>
              <div className={styles.filterOption}>
                {renderCheckbox('female', 'gender')}
              </div>
              <div className={styles.filterOption}>
                {renderCheckbox('male', 'gender')}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
