import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "5px 10px", width: "300px", marginBottom: "20px" }}
    />
  );
}

export default SearchBar;
