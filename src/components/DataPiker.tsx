import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { DateTimePicker, LocalizationProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import faLocale from "date-fns/locale/fa";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  date: Date;
}

const schema = yup.object().shape({
  date: yup.date().required('تاریخ تولد را وارد کنید')
});

const DataPiker = () => {
  const [selectedDate, handleDateChange] = useState<Date | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: FormData) => {
    console.log(data.date);
    reset();
  };

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils} locale={faLocale}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DateTimePicker
              label="تاریخ تولد"
              inputVariant="outlined"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(props) => <TextField {...props} />}
              fullWidth
            />
            {errors.date && <p>{errors.date.message}</p>}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              ثبت
            </Button>
          </Grid>
        </Grid>
      </form>
    </LocalizationProvider>
  );
};

export default DataPiker;