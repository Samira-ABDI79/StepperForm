import { useState } from "react";
import React from 'react';
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
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import useTheme from '@mui/system/useTheme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";

import { style } from "../Style/Form";

import Card from "./Card";

// type FormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
// };

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  city: Yup.string().required(),
  dateOfBirth: Yup.date().required(),
});

interface Option {
  value: string;
  label: string;
}
const options: Option[] = [
  { value: "تهران", label: "تهران" },
  { value: "البرز", label: "البرز" },
  { value: "مشهد", label: "مشهد" },
  { value: "تبریز", label: "تبریز" },
  { value: "ارومیه", label: "ارومیه" },
  { value: "گیلان", label: "گیلان" },
  { value: "گرگان", label: "گرگان" },
];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [date, setDate] = useState("");
  const [image, setImage] = useState();

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleDateChange = (tarikh:any) => {
    setDate(tarikh);
    console.log(tarikh)
  };
  function handleUploadImage(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(file);
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): any => {
    const value = event.target.value as string;
    const option = options.find((o) => o.value === value);
    setSelectedOption(() => option || null);
    return;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(image);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = (e: any) => {
    console.log(e);

    dispatch({ type: "SUBMIT_FORM", e });

    const existingTheme = useTheme();
    const theme = React.useMemo(
      () => createTheme({ direction: 'rtl' }, existingTheme),
      [existingTheme],
    );
  };
  return (
    <Container>
      <Box sx={style.steperWrapper} dir="rtl">
        <Stepper activeStep={activeStep}>
          <Step>
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
          <Box sx={{ height: "20rem" }}>
            <Container>
              <Box sx={style.formWrapper}>
                <Typography align="center" sx={style.stepStyle}>
                  مرحله اول
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit(handleFinish)}
                  sx={{ py: "1.5rem" }}
                >
                  <FormControl fullWidth>
                    <FormLabel sx={style.FormLabelStyle}>نام</FormLabel>
                    <TextField
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      name="firstName"
                      variant="outlined"
                      color="secondary"
                      type="text"
                      sx={{ mb: 3 }}
                      fullWidth
                      value={firstName}
                      // error={emailError}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <FormLabel sx={style.FormLabelStyle}>
                      نام خانوادگی
                    </FormLabel>
                    <TextField
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      name="lastName"
                      variant="outlined"
                      color="secondary"
                      type="txt"
                      value={lastName}
                      // error={passwordError}
                      fullWidth
                      sx={{ mb: 3 }}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <FormLabel sx={style.FormLabelStyle}>
                      استان محل سکونت{" "}
                    </FormLabel>
                    <Box>
                      <Select
                        name="city"
                        fullWidth
                        value={selectedOption?.value || ""}
                        onChange={handleChange as any}
                      >
                        <MenuItem value="">شهر خود را انتخاب کنید</MenuItem>
                        {options.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </FormControl>

                  <FormControl fullWidth sx={{ mt: "0.5rem" }}>
                    <FormLabel sx={style.FormLabelStyle}>تایخ تولد</FormLabel>
                   
      <div dir="rtl">
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DateTimePicker label="Date Picker" defaultValue={new Date(2022, 1, 1)}     value={date}
        onChange={handleDateChange} />
        </LocalizationProvider>
      </div>
  
                  </FormControl>
                </Box>
                <Box sx={style.buttonBox}>
                  <Button
                    variant="contained"
                    sx={style.nextButton}
                    type="submit"
                    onClick={handleNext}
                  >
                    بعدی
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        )}
        {activeStep === 1 && (
          <Box>
            <Container>
              <Box
                component="form"
                onSubmit={handleSubmit(handleFinish)}
                sx={style.formWrapper}
              >
                <Typography align="center" sx={style.stepStyle}>
                  مرحله دوم
                </Typography>

                <Stack>
                  <Typography variant="h4" align="center" gutterBottom>
                    دریافت عکس
                  </Typography>

                  <Box sx={style.UploadBox}>
                    <input type="file" onChange={handleUploadImage} />
                  </Box>
                </Stack>
                <Box sx={style.buttonBox}>
                  <Button
                    variant="contained"
                    sx={style.nextButton}
                    type="submit"
                    onClick={handleNext}
                  >
                    بعدی
                  </Button>

                  <Button
                    variant="contained"
                    sx={style.prevButton}
                    onClick={handleBack}
                  >
                    قبلی
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        )}
        {activeStep === 2 && (
          <Box>
            <Container>
              <Box sx={style.formWrapper}>
                <Typography align="center" sx={style.stepStyle}>
                  مرحله دوم
                </Typography>
                <Card
                  cityName={selectedOption?.label}
                  image={image}
                  name={firstName + " " + lastName}
                  date={date}
                />
                <Box sx={style.buttonBox}>
                  <Button
                    variant="contained"
                    sx={style.nextButton}
                    type="submit"
                    onClick={handleFinish}
                  >
                    ثبت نهایی
                  </Button>
                  <Button
                    variant="contained"
                    sx={style.prevButton}
                    onClick={handleBack}
                  >
                    قبلی
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default App;
