import React, { useState } from 'react';

const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
    // console.log(preview);
  };

  return (
    <div>
      <img
        src={preview}
        alt="preview"
        width="112"
        height="112"
        style={{ borderRadius: '20px' }}
      />
    </div>
  );
};

export default PreviewImage;
