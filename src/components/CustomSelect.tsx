import { FormControl, FormLabel, Box, Select, MenuItem } from "@mui/material";
import { style } from "../Style/Form";
import { ostan } from "../data/inedex";
import { Controller, useForm } from "react-hook-form";

interface InputProps{
    error :any
    message:any
    register:any
    label:string;
    name:string
   }
   const ITEM_HEIGHT = 38;
      const ITEM_PADDING_TOP = 8;
      const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
            width: '20ch',
          },
        },
      };
export default function CustomSelect({error,message,register,label,name}:InputProps){
    const { handleSubmit, reset, control } = useForm();
    return(
        <FormControl fullWidth style={{ marginBottom: '16px ' }} >
        <FormLabel  style={{ margin: '16px 0' }} >{label}</FormLabel>
        <Controller
name={name}
control={control}
render={() => (
    <Select
    MenuProps={MenuProps}
      labelId="select-label"
    
      {...register('city')}
  

     
    >
         {ostan.map((item) => (
<MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
))}
    </Select>
)}
{...error  ? <p className="error-text" >{message}</p> : <></>}

/>
      
      </FormControl>
    )
}