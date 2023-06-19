import { createSlice } from '@reduxjs/toolkit'

export interface FormState {
    firstName:String
    lastName:String
    city:String
    date:String
  }
  const initialState: FormState = {
    firstName:"samira",
    lastName:"abdi",
    city:"urmia",
    date:"79/8/30"
  }
const FormSlice=createSlice({
    name:"Form",
    initialState,
    reducers:{
        interFirstName:(state,action)=>{state.firstName=action.payload},
        interLastName:(state,action)=>{state.lastName=action.payload},
        interCity:(state,action)=>{state.city=action.payload},
        interDate:(state,action)=>{state.date=action.payload},
    }
})

export const { interFirstName,
  interLastName,
  interCity,
  interDate, } = FormSlice.actions

export default FormSlice.reducer