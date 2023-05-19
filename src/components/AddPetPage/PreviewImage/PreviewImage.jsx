import React, { useState } from 'react';
import styles from './PreviewImage.module.scss';

const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div>
      <img
        className={styles.photo}
        src={preview}
        alt="preview"
        style={{ borderRadius: '20px' }}
      />
    </div>
  );
};

export default PreviewImage;
