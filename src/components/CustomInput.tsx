import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  name: string;
}



const CustomInput = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
 
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
  <>
  
  <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
        )}
      />
  </>

  );
};

export default CustomInput;