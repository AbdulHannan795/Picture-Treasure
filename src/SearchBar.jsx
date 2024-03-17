import React, { useState } from 'react';
import Suggestion from './Suggestion';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    // Filter and update suggestions based on user input
    const filteredSuggestions = getSuggestions(userInput);
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionSelect = (suggestion) => {
    setSelectedCategory(suggestion);
    setQuery(suggestion);
    setSuggestions([]);
  };

  const handleSearch = () => {
    onSearch(selectedCategory);
  };

  const getSuggestions = (input) => {
    // Implement logic to fetch or filter category suggestions
    const categories = ['Logo', 'Social Media Icons','Web Icons'];
    return categories.filter((category) =>
      category.toLowerCase().includes(input.toLowerCase())
    );
  };
  return (
 <>
 <div className="main">

   <div className="search-container">
   <h1 className="search-title">Elevate Your Projects with<span
   > Captivating Images.</span> </h1>
    <div className="search-bar">
   
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={query}
          onChange={handleInputChange}
      />
   
    </div>
    {suggestions.length > 0 && (
        <Suggestion suggestions={suggestions} onSelect={handleSuggestionSelect} />
      )}
      <button onClick={handleSearch}>Search</button>

   </div>
 </div>
 </>
  );
};

export default SearchBar;
