import { createSlice } from "@reduxjs/toolkit";

export interface FormState {
  firstName: string;
  lastName: string;
  city: string;
  image: any;
  date: any;
  dateError:boolean;
}
const initialState: FormState = {
  firstName: "",
  lastName: "",
  city: "",
  image: "",
  date: "",
  dateError:false,
};
const FormSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    interFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    interLastName: (state, action) => {
      state.lastName = action.payload;
    },
    interCity: (state, action) => {
      state.city = action.payload;
    },
    interDate: (state, action) => {
      state.date = action.payload;
    },
    interImage: (state, action) => {
      state.image = action.payload;
    },
    
    setDateEror: (state, action) => {
      state.dateError = action.payload;
    },
  },
});

export const {
  interFirstName,
  interLastName,
  interCity,
  interImage,
  interDate,
  setDateEror
} = FormSlice.actions;

export default FormSlice.reducer;
