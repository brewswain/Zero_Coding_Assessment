import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    isVisible: false,
    cartItemState: [],
    status: null,
  },

  reducers: {
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
    addToCart: (state, action) => {
      const itemIndex = getItemIndex(state, action.payload._id);

      if (itemIndex && itemIndex < 0) {
        state.cartItemState.push(action.payload);
      } else {
        state.cartItemState[itemIndex].quantity += action.payload.quantity;
      }
    },

    removeFromCart: (state, action) => {
      const itemIndex = getItemIndex(state, action.payload._id);

      if (state.cartItemState[itemIndex].quantity <= 1) {
        state.cartItemState = state.cartItemState.filter(
          (cartItem) => cartItem.title !== action.payload.title
        );
      } else {
        state.cartItemState[itemIndex].quantity -= 1;
      }
    },

    clearFromCart: (state, action) => {
      const itemIndex = getItemIndex(state, action.payload._id);

      if (itemIndex && itemIndex < 0) {
        state.cartItemState = state.cartItemState.filter(
          (cartItem) => cartItem.title !== action.payload.title
        );
      }
    },

    clearEntireCart: (state) => {
      state.cartItemState = [];
    },
  },
});

const getItemIndex = (state, idToFind) => {
  const targetId = state.cartItemState.map((item) => item._id);
  return targetId.indexOf(idToFind);
};

export const {
  addToCart,
  clearFromCart,
  clearEntireCart,
  removeFromCart,
  toggleVisibility,
} = cartSlice.actions;

export const selectVisible = (state) => state.cart.isVisible;
export const selectCartItems = (state) => state.cart.cartItemState;

export default cartSlice.reducer;
