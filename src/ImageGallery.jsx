import React, { useState, useEffect } from 'react';
import imageData from './data';

function ImageGallery({ selectedCategory }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Filter images based on the selected category
    const filteredImages = imageData.filter(
      (image) => image.category.toLowerCase() === selectedCategory.toLowerCase()
    );
    setImages(filteredImages);
  }, [selectedCategory]);
  
  const handleDownload = (imageUrl, filename) => {
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename; 
    link.click();
  };

  return (
    <div>
      <h2> {selectedCategory}</h2>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.image} alt={image.category} />
            <button onClick={() => handleDownload(image.image, image.filename)}>
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
