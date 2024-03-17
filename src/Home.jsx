import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Callback to handle search
  const handleSearch = (category) => {
    setSelectedCategory(category);
  };

  return (
<>
<SearchBar onSearch={handleSearch} />
<ImageGallery selectedCategory={selectedCategory}/>
</>
  );
};

export default Home;
