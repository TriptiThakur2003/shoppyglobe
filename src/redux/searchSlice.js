import { createSlice } from "@reduxjs/toolkit";

// Initial state for search feature
const initialState = {
  searchTerm: "", // Stores the text typed by the user
};

// Create a Redux slice for search functionality
const searchSlice = createSlice({
  name: "search", // Slice name (used in Redux store)
  initialState,
  reducers: {
    // Update search term when user types in search box
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    // Clear search term (useful when resetting filters)
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
});

// Export actions to use in components
export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;

// Export reducer to add to Redux store
export default searchSlice.reducer;
