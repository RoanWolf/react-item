// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0, // 初始化计数器为 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // 增加 1
    },
    decrement: (state) => {
      state.value -= 1; // 减少 1
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;