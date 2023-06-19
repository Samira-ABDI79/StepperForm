import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {},
  reducers: {
    SUBMIT_FORM: (state, action) => {
      action.payload;
    },
  },
});

export const { SUBMIT_FORM } = formSlice.actions;

export { formSlice };
