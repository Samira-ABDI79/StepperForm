import TextField from "@material-ui/core/TextField";

import { FormControl, FormLabel } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { theme } from "../Theme/theme";
import { LabelForm } from "../Style/Form";

interface InputProps {
  error: any;
  message: any;
  register: any;
  label: string;
  name: string;
}
const MyTextField = styled(TextField)({
  // backgroundColor: theme.palette.common.digitaGrey5,
});
export const CustomInput = ({
  error,
  message,
  register,
  label,
  name,
}: InputProps) => {
  const { control } = useForm();

  return (
    <div>
      <FormControl fullWidth style={{ marginBottom: "16px " }}>
        <LabelForm style={{ marginBottom: "16px " }}>{label}</LabelForm>
        <Controller
          name={name}
          control={control}
          render={() => (
            <MyTextField
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
