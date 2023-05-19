import React, { useState } from 'react';
import styles from './PreviewImage.module.scss';
import { ReactComponent as Trash } from '../../../img/svg/trash.svg';

const PreviewImage = ({ file, clear }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.photo}
        src={preview}
        alt="preview"
        style={{ borderRadius: '20px' }}
      />
      <button className={styles.trashBtn} onClick={clear}>
        <Trash className={styles.trash}></Trash>
      </button>
    </div>
  );
};

export default PreviewImage;
