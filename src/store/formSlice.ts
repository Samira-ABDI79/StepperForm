import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {},
  reducers: {
    increment: (state) => state,
  },
});

export const { increment } = formSlice.actions;

export { formSlice };
