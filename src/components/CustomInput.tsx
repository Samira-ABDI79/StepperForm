import TextField from "@material-ui/core/TextField";

import { FormControl, FormLabel } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

interface InputProps {
  error: any;
  message: any;
  register: any;
  label: string;
  name: string;
}

export const CustomInput = ({
  error,
  message,
  register,
  label,
  name,
}: InputProps) => {
  const {  control } = useForm();

  return (
    <div>
      <FormControl fullWidth style={{ marginBottom: "16px " }}>
        <FormLabel style={{ margin: "16px 0" }}>{label}</FormLabel>
        <Controller
          name={name}
          control={control}
          render={() => (
            <TextField
              variant="outlined"
              fullWidth
              {...register}
              // {...register('firstName')}
              error={Boolean(error)}
              helperText={message}
            />
          )}
        />
      </FormControl>
    </div>
  );
};
