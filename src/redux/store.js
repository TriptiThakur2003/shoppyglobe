import { configureStore } from "@reduxjs/toolkit";

// Import reducers from different feature slices
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    // cart → manages cart-related state (items, quantity, etc.)
    cart: cartReducer,

    // search → manages search text entered by the user
    search: searchReducer,
  },
});

// Export store so it can be provided to the app
// (used in <Provider store={store}>)
export default store;
