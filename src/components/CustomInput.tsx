import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Paper } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
interface FormInput{
  name:any;
 
   label:any;
}
export default function  FormInputText ({ name, label }:FormInput) {
  const { handleSubmit, reset, control } = useForm();

   
    const onSubmit = (data: any) => console.log(data);
  
    return (
      <form>
        <Controller
          name={"textValue"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={label} />
          )}
        />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        <Button onClick={() => reset()} variant={"outlined"}>Reset</Button>
      </form>
    
  );
};