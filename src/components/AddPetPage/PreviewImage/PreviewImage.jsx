import React, { useState } from 'react';

const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div>
      <img src={preview} alt="preview" width="150" height="150" />
    </div>
  );
};

export default PreviewImage;
