import React from 'react';
import styles from './AddPetPageHeader.module.scss';

function AddPetPageHeader({ data }) {
  return <h2 className={styles.title}>{data}</h2>;
}

export default AddPetPageHeader;
