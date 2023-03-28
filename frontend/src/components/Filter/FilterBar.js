import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Component for filtering products by search term
const FilterBar = ({ onFilter }) => {
  // State variables and hooks initialization
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Function to handle changes in search term input field
  const handleSearchTermChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onFilter(value);
  };

  // Function to handle click on "Add Product" button
  const onClickAddProduct = () => {
    navigate("/add");
  };

  // Render component
  return (
    <div className="filter-bar">
      <input
        type="text"
        id="search-term"
        name="search-term"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search by Scrum Master or Developer"
      />

      <button onClick={onClickAddProduct}>Add Product</button>               

    </div>
  );
};
export default FilterBar;