import { createSlice } from "@reduxjs/toolkit";

// product array
const savedItems = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState = {
  items: savedItems,
  totalPrice: savedItems.reduce((sum, item) => sum + item.price, 0),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      // 按 id 删除
      const index = state.items.findIndex((i) => Number(i.id) === Number(action.payload));
      if (index !== -1) {
        state.totalPrice -= state.items[index].price;
        state.items.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.setItem("cart", "[]");
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
