import React from 'react';

const Filtre = ({ handleTitleFilterChange, handleRatingFilterChange }) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={handleTitleFilterChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={handleRatingFilterChange}
      />
    </div>
  );
};

export default Filtre;
