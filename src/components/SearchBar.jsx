import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);

  return (
    <>
      <label htmlFor="searchInput" style={{visibility: 'hidden'}}>Search Products</label>
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
