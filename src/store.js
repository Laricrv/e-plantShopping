import { configureStore } from '@reduxjs/toolkit';  // Import configureStore from @reduxjs/toolkit
import cartReducer from './CartSlice';  // Import the cart reducer from CartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Associate the cart reducer with the 'cart' key
  },
});

export default store;  // Export the configured store
