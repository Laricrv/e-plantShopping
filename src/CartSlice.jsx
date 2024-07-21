import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: [],
    },
    reducers: {
      addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
      },
      removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
      },
      updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
      },
      clearCart: (state) => {
        state.items = [];
      },
    },
    selectors: {
      totalCost: (state) => {
        return state.items.reduce((total, item) => total + item.cost * item.quantity, 0);
      },
    },
  });
  
  export const { addItem, removeItem, updateQuantity, clearCart } = CartSlice.actions;
  export default CartSlice.reducer;
  
