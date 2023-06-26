import { useDispatch, useSelector } from "react-redux";
import {
  enteredCity,
  enteredFirstName,
  enteredLastName,
  enteredDate,
  setDateEror,
} from "../store/FormSlice";
import moment from "moment-jalaali";
import { ostan } from "../data/inedex";
import { schema } from "../models/FoemDataSchema";
import { Controller } from "react-hook-form";
import { userState } from "../store/FormSlice";
import {
  Typography,
  Box,
  Container,
  FormControl,
  FormLabel,
  Autocomplete,
  TextField,
} from "@mui/material";

import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LabelForm, style } from "../Style/Form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { NextButton } from "../components";
import { CustomInput } from "./CustomInput";

type FormData = {
  firstName: string;
  lastName: string;
  city: string;
  // dateOfBirth: Date;
};
interface Props {
  handleFinish: () => void;
  handleNext: () => void;
}

export default function Form({ handleFinish, handleNext }: Props) {
  const dispatch = useDispatch();
  const { lastName, firstName, city, dateError, date } = useSelector(userState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName,
      lastName,

      city,
    },
    resolver: yupResolver(schema),
  });
  const { control } = useForm();
  const onSubmit = (formData: FormData) => {
    dispatch(enteredFirstName(formData.firstName));
    dispatch(enteredLastName(formData.lastName));
    dispatch(enteredCity(formData.city));
    if (date) {
      handleNext();
      dispatch(setDateEror(false));
    } else {
      dispatch(setDateEror(true));
    }
  };

  const ITEM_HEIGHT = 38;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
        width: "20ch",
      },
    },
  };

  // تبدیل تاریخ میلادی به شمسی

  const handleJalaliDateChange = (date: Date | null) => {
    const jalaliDate = moment(date).format("jYYYY/jMM/jDD");
    dispatch(enteredDate(jalaliDate));
  };
  console.log(city, "city");

  class Adapter extends AdapterDateFnsJalali {
    getWeekdays = () => {
      return [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سهشنبه",
        "چهارشنبه",
        "پنجشنبه",
        "جمعه",
      ];
    };
  }
  return (
    <form className="marginBottom" onSubmit={handleSubmit(onSubmit)}>
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
            <CustomInput
              name="firstName"
              label="نام"
              error={errors.firstName}
              message={errors.firstName?.message}
              register={register("firstName")}
            />

            <CustomInput
              name="lastname"
              label="نام خانوادگی"
              error={errors.lastName}
              message={errors.lastName?.message}
              register={register("lastName")}
            />
            <FormControl fullWidth style={{ marginBottom: "16px " }}>
              <LabelForm>استان محل سکونت</LabelForm>
              <Box>
                <FormControl
                  variant="outlined"
                  fullWidth
                  error={Boolean(errors.city)}
                  sx={{ mt: "1rem" }}
                >
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    {...register("city")}
                    options={ostan}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  {errors.city && (
                    <p className="error-text">{errors.city.message}</p>
                  )}
                </FormControl>
              </Box>
            </FormControl>

            <FormControl fullWidth sx={{ mt: "1.5rem" }} dir="rtl">
              <FormLabel sx={style.FormLabelStyle}>تایخ تولد</FormLabel>
              <LocalizationProvider dateAdapter={Adapter}>
                <Controller
                  name="DatePicker"
                  control={control}
                  render={() => (
                    <DatePicker
                      onChange={handleJalaliDateChange}
                      views={["year", "month", "day"]}
                    />
                  )}
                />
              </LocalizationProvider>
              {dateError ? (
                <p className="error-text">"لطفا تاریخ تولدتون را وارد کنید</p>
              ) : (
                <></>
              )}
            </FormControl>
          </Box>
          <Box sx={style.buttonBox}>
            <NextButton onClick={() => {}} />
          </Box>
        </Box>
      </Container>
    </form>
  );
}
