import { configureStore } from "@reduxjs/toolkit";
import visibleReducer from "../components/visibleSlice";
import cartReducer from "../components/cartSlice";
export const store = configureStore({
  reducer: {
    visible: visibleReducer,
    cart: cartReducer,
  },
});
