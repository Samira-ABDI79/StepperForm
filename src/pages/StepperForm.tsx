import { useState } from "react";
import React from 'react';
import type { RootState } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
import {  interCity, interFirstName, interLastName,
 } from '../store/FormSlice'
 import moment from 'moment-jalaali';
import { ostan } from "../data/inedex";
import {schema} from "../schema"
import {
  Stepper,
  Step,
  StepLabel,
 
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
  PrevButton,
  FinishButton,
  UploadImage,Card} from "../components";
import ViewInformation from "../components/ViewInformation";

type FormData = {
  firstName: string;
  lastName: string;
  city: string;
  
};




function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  
  

  const dispatch = useDispatch()
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [str,Setstr]=useState("")
  
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleFinish = () => {
    dispatch({ type: "SUBMIT_FORM" });
  };
  const onSubmit = (formData: FormData) => {
    dispatch(interFirstName(formData.firstName))
    dispatch(interLastName(formData.lastName))
    dispatch(interCity(formData.city))
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
// تبدیل تاریخ میلادی به شمسی

  const handleJalaliDateChange = (date: Date | null) => {
  
    handleDateChange(date);
    const jalaliDate = moment(date).format('jYYYY/jMM/jDD');
    Setstr(jalaliDate.toString())
    console.log(jalaliDate)
 
  };
  return (
    <div className="StepperFormBackground"  >
      <Box sx={style.steperWrapper} dir="rtl">
        <Stepper activeStep={activeStep}>
          <Step >
            <StepLabel sx={style.StepLabel}>مرحله 1</StepLabel>
          </Step>
          <Step>
            <StepLabel sx={style.StepLabel}>مرحله 2</StepLabel>
          </Step>
          <Step>
            <StepLabel sx={style.StepLabel}>مرحله 3</StepLabel>
          </Step>
        </Stepper>
        {activeStep === 0 && (
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
                    <TextField
                    
                      sx={{ mb: 3 }}
                    
                      variant="outlined"
                      fullWidth
                      {...register('firstName')}
                      error={Boolean(errors.firstName)}
                      helperText={errors.firstName?.message}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <FormLabel sx={style.FormLabelStyle}>
                      نام خانوادگی
                    </FormLabel>
                    <TextField
                     
                      variant="outlined"
                      fullWidth
                      {...register('lastName')}
                      error={Boolean(errors.lastName)}
                      helperText={errors.lastName?.message}
                      sx={{ mb: 3 }}
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
            // value={city}

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
          <DatePicker 
            value={selectedDate} 
          // onChange={handleDateChange} 
          defaultValue={new Date()} 
        onChange={handleJalaliDateChange}
      
      
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
        )}
        {activeStep === 1 && (
        <UploadImage  handleBack={handleBack} handleNext={handleNext}  />
        )}
        {activeStep === 2 && (
         <ViewInformation handleFinish={handleFinish} handleBack={handleBack} />
        )}
      </Box>
    </div>
  );
}

export default StepperForm;
