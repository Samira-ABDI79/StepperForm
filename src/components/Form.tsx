import { useState } from "react";
import React from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import {  interCity, interFirstName, interLastName,interDate
 } from '../store/FormSlice'
 import moment from 'moment-jalaali';
import { ostan } from "../data/inedex";
import {schema} from "../schema"
import { Controller } from "react-hook-form";
import type { RootState } from '../store/index'

import {
  Typography,
  TextField,
  Box,
  Container,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { style } from "../Style/Form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  NextButton,
 } from "../components";

type FormData = {
  firstName: string;
  lastName: string;
  city: string;
};
interface Props  {
    handleFinish: () => void ;
    handleNext: () => void ;
  }

export default function Form({ handleFinish  , handleNext}:Props){

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
    const onSubmit = (formData: FormData) => {
        dispatch(interFirstName(formData.firstName))
        dispatch(interLastName(formData.lastName))
        dispatch(interCity(formData.city))
      
        handleNext()
      };
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
      const [selectedDate, handleDateChange] = useState<Date | null>(null);
    //   const [selectedItem, setSelectedItem] = useState<Date | null>(null);

    // تبدیل تاریخ میلادی به شمسی
    
      const handleJalaliDateChange = (date: Date | null) => {
        const jalaliDate = moment(date).format('jYYYY/jMM/jDD');
        dispatch(interDate(jalaliDate))
      };
      const {  reset, control } = useForm();
    return (
        <form className="marginBottom" onSubmit={handleSubmit(onSubmit)} >
        <Container>
          <Box sx={style.formWrapper}>
            <Typography align="center" sx={style.stepStyle}>
            ثبت نام
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(handleFinish)}
              sx={{ py: "1.5rem" }}
            >
              <FormControl fullWidth>
                <FormLabel sx={style.FormLabelStyle}>نام</FormLabel>
                <Controller
        name={"userName"}
        control={control}
        render={() => (
          <TextField
          //  value={firstName}
            sx={{ mb: 3 }}
          
            variant="outlined"
            fullWidth
            {...register('firstName')}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />
              
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={style.FormLabelStyle}>
                  نام خانوادگی
                </FormLabel>
                <Controller
        name={"userName"}
        control={control}
        render={() => (
          <TextField
          //  value={lastName}
            variant="outlined"
            fullWidth
            {...register('lastName')}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
            sx={{ mb: 3 }}
          />
        )}
      />
              
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={style.FormLabelStyle}>
                  استان محل سکونت{" "}
                </FormLabel>
                <Box>
                <FormControl variant="outlined" fullWidth error={Boolean(errors.city)}>
     
        <Select
        MenuProps={MenuProps}
          labelId="select-label"
        
          // defaultValue={city}
          {...register('city')}
      

          // defaultValue={city}
        >
             {ostan.map((item) => (
   <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
  ))}
        </Select>
        {errors.city && <p className="error-text" >{errors.city.message}</p>}
      </FormControl>
                </Box>
              </FormControl>
              <FormControl fullWidth sx={{ mt: "1.5rem" }} dir="rtl"  >
                <FormLabel sx={style.FormLabelStyle}>تایخ تولد</FormLabel>
    <LocalizationProvider  dateAdapter={AdapterDateFnsJalali}>
    <Controller
        name="DatePicker"
        control={control}
        render={() => (
          <DatePicker 
      
      defaultValue={new Date()} 
    onChange={handleJalaliDateChange}
      />
        )}
      />
    
    </LocalizationProvider>
              </FormControl>
            </Box>
            <Box sx={style.buttonBox}>
            <NextButton onClick={()=>console.log()} />
            </Box>
          </Box>
        </Container>
      </form>
    )
}