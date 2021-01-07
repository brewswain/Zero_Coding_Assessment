import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
