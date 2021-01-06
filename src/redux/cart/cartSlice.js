import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartVisible",
  initialState: {
    value: false,
  },

  reducers: {
    toggleVisibility: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleVisibility } = cartSlice.actions;

export const selectCart = (state) => state.cart.value;

export default cartSlice.reducer;
