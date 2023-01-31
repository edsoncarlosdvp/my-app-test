import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "stock",

  initialState: {
    counter: 0,
  },

  reducers: {
    increment(state) {
      state.counter += 1;
    },

    decrement(state) {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = Slice.actions;
export default Slice.reducer;
