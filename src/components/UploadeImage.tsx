import { Box, Container, Typography, Stack } from "@mui/material";
import { style } from "../Style/Form";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';

import * as Yup from 'yup';

import { interImage } from "../store/FormSlice";
import { useForm } from "react-hook-form";
import { RootState } from "../store";


interface Props {
  handleNext: () => void;
  handleBack: () => void;
}
type FormData =Yup.InferType<typeof schema>
const schema = Yup.object().shape({
 
  photo: Yup.mixed().required('عکس الزامی است'),
});
export default function UploadImage({ handleNext, handleBack }: Props) {
  const  image  = useSelector(
    (state: RootState) => state.User.image
  );
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    // defaultValues: {
    // image
    // },
    resolver: yupResolver(schema),
  });

  const [fileName, setFileName] = useState("");

  const dispatch = useDispatch();
  function handleUploadImage(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    setFileName(file.name);
    reader.onload = () => {
      dispatch(interImage(reader.result as any));
    };
    reader.readAsDataURL(file);
  }
  const handleFormSubmit = (data: FormData) => {
    console.log(data);
   };
  return (
    <Box className="marginBottom">
      <Container>
        <Box
          component="form"
          onSubmit={handleSubmit(handleFormSubmit)}
          sx={style.formWrapper}
        >
          <Typography align="center" sx={style.stepStyle}>
            دریافت عکس
          </Typography>
          <Stack
            sx={style.UploadBox}
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <label htmlFor="file-upload" className="custom-file-upload">
              {fileName || "یک عکس انتخاب کنید"}
            </label>
            <input
              accept=".jpeg,.raw,.dng,.tiff,.bmp,.png,.svg,.webp,.gif"
              type="file"
              style={{ width: "80%" }}
              required
              {...register('photo')}
              // value={imageSrc}
              onChange={handleUploadImage}
            />
          </Stack>
          {errors.photo && (
          <span >{errors.photo.message}</span>
        )}
          <Box sx={style.buttonBox}>
            <NextButton disabled={!fileName} onClick={handleNext} />
            <PrevButton onClick={handleBack} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
