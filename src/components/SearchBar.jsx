import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      style={{ padding: "5px 10px", width: "300px", marginBottom: "20px" }}
    />
  );
}

export default SearchBar;
