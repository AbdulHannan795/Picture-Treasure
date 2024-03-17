

import React from 'react';

function Suggestion({ suggestions, onSelect }) {
  return (
    <ul className="suggestions">
      {suggestions.map((suggestion, index) => (
        <li key={index} onClick={() => onSelect(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
}

export default Suggestion;
