import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const visibleSlice = createSlice({
  name: "visible",
  initialState,
  reducers: {
    enableVisible: () => true,
    disableVisible: () => false,
    toggleVisible: (state) => !state,
  },
});

export const { enableVisible, disableVisible, toggleVisible } =
  visibleSlice.actions;

export default visibleSlice.reducer;
