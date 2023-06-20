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
  Button,
  Typography,
  TextField,
  Box,
  Container,
  FormControl,
  FormLabel,
  Stack,
  MenuItem,
  Select,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { style } from "../Style/Form";
import Card from "../components/Card";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
import NextButton from "../components/NextButton";
type FormData = {
  firstName: string;
  lastName: string;
  city: string;
  
};




function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [fileName, setFileName] = useState('');
  
  const city  = useSelector((state: RootState) => state.User.city)
  const firstName  = useSelector((state: RootState) => state.User.firstName)
  const lastName  = useSelector((state: RootState) => state.User.lastName)

  const dispatch = useDispatch()
  const [image, setImage] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [str,Setstr]=useState("")
  
  function handleUploadImage(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    setFileName(file.name);
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(file);
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleFinish = (e: any) => {
    dispatch({ type: "SUBMIT_FORM", e });
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
          <Box className="marginBottom" >
            <Container>
              <Box
                component="form"
                onSubmit={handleSubmit(handleFinish)}
                sx={style.formWrapper}
              >
                <Typography align="center" sx={style.stepStyle}>
                دریافت عکس
                </Typography>
                  <Stack sx={style.UploadBox} justifyContent="center" alignItems="center" spacing={2} >
                  <label htmlFor="file-upload" className="custom-file-upload">
          {fileName || 'یک عکس انتخاب کنید'}
        </label>
                    <input 
                    accept=".jpeg,.raw,.dng,.tiff,.bmp,.png,.svg,.webp,.gif"
                    type="file"
                    style={{width:"80%"}}
                    // {...register('file')}
                    onChange={handleUploadImage}
                    />
                  </Stack>
                <Box sx={style.buttonBox}>
              
                 <NextButton onClick={handleNext} />

                  <Button
                    variant="contained"
                    sx={style.prevButton}
                    onClick={handleBack}
                  >
                 <span>   قبلی</span>
                 <ArrowBackIcon /> 
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        )}
        {activeStep === 2 && (
          <Box className="marginBottom"  >
            <Container>
              <Box sx={style.formWrapper}>
                <Typography align="center" sx={style.stepStyle}>
                   ثبت و نمایش
                </Typography>
                <Card
                 
                  cityName={city}
                  image={image}
                  name={firstName + " " + lastName}
                  
                  date={str}
                
                />
                <Box sx={style.buttonBox}>
                  <Button
                    variant="contained"
                    sx={style.nextButton}
                    type="submit"
                    onClick={handleFinish}
                  >
                    <Link style={{color:"inherit" , textDecoration:"none"}} to="/finish" > ثبت نهایی</Link>
                   
                  </Button>
                  <Button
                    variant="contained"
                    sx={style.prevButton}
                    onClick={handleBack}
                  >
                 <span>   قبلی</span>
                 <ArrowBackIcon /> 
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default StepperForm;
