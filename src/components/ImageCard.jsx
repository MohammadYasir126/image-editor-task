import React from 'react';

const ImageCard = ({ image, onAddCaption }) => (
  <div className="image-card">
    <img src={image.previewURL} alt={image.tags} />
    <button onClick={() => onAddCaption(image)}>Add Caption</button>
  </div>
);

export default ImageCard;
