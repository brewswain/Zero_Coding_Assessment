import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cart/cartSlice";
import shopItemsReducer from "../redux/shopItems/shopItemsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    shopItems: shopItemsReducer,
  },
});
