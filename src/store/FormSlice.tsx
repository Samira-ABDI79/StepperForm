import { createSlice } from '@reduxjs/toolkit'

export interface FormState {
    firstName:String
    lastName:String
    city:String
    image:any
    date:any
  }
  const initialState: FormState = {
    firstName:"",
    lastName:"",
    city:"",
    image:"",
    date:""
  }
const FormSlice=createSlice({
    name:"Form",
    initialState,
    reducers:{
        interFirstName:(state,action)=>{state.firstName=action.payload},
        interLastName:(state,action)=>{state.lastName=action.payload},
        interCity:(state,action)=>{state.city=action.payload},
        interDate:(state,action)=>{state.date=action.payload},
        interImage:(state,action)=>{state.image=action.payload},
       


    }
})

export const { interFirstName,
  interLastName,
  interCity,
   interImage,interDate} = FormSlice.actions

export default FormSlice.reducer