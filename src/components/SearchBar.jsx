import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";

function SearchBar() {
  // Redux dispatch function to update search term
  const dispatch = useDispatch();

  // Get current search term value from Redux store
  const searchTerm = useSelector((state) => state.search.searchTerm);

  return (
    <>
      {/* 
        Hidden label for accessibility:
        - Helps screen readers
        - Prevents console warnings
        - Supports browser autofill & accessibility tools
      */}
      <label htmlFor="searchInput" style={{ visibility: "hidden" }}>
        Search Products
      </label>

      {/* 
        Search input field:
        - Controlled input linked with Redux state
        - Updates search term in global store on every change
        - Bootstrap classes used for spacing and styling
      */}
      <input
        id="searchInput"
        type="text"
        className="form-control search-input mb-4 py-3 px-4"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </>
  );
}

export default SearchBar;
