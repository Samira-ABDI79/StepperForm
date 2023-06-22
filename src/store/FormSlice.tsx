import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface FormState {
  firstName: string;
  lastName: string;
  city: string;
  image: any;
  date: any;
  dateError: boolean;
}
const initialState: FormState = {
  firstName: "",
  lastName: "",
  city: "",
  image: "",
  date: "",
  dateError: false,
};
const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    enteredFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    enteredLastName: (state, action) => {
      state.lastName = action.payload;
    },
    enteredCity: (state, action) => {
      state.city = action.payload;
    },
    enteredDate: (state, action) => {
      state.date = action.payload;
    },
    enteredImage: (state, action) => {
      state.image = action.payload;
    },

    setDateEror: (state, action) => {
      state.dateError = action.payload;
    },
  },
});

export const {
  enteredFirstName,
  enteredLastName,
  enteredCity,
  enteredImage,
  enteredDate,
  setDateEror,
} = FormSlice.actions;

export const userState = (state: RootState) => state.User;

export default FormSlice.reducer;
