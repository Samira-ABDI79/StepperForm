import { Box, Container, Typography, Stack } from "@mui/material";
import { style } from "../Style/Form";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { interImage } from "../store/FormSlice";
import { RootState } from "../store";

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}
export default function UploadImage({ handleNext, handleBack }: Props) {
  const [fileName, setFileName] = useState("");
  const imageSrc = useSelector((state: RootState) => state.User.image);
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
  return (
    <Box className="marginBottom">
      <Container>
        <Box
          component="form"
          // onSubmit={handleSubmit(handleFinish)}
          sx={style.formWrapper}
        >
          <Typography align="center" sx={style.stepStyle}>
            دریافت عکس
          </Typography>
          {imageSrc ? (
            <img
              src={imageSrc}
              style={{ width: "50%", aspectRatio: "2/1", objectFit: "cover" }}
              alt=""
            />
          ) : (
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
                // {...register('file')}
                // value={imageSrc}
                onChange={handleUploadImage}
              />
            </Stack>
          )}
          <Box sx={style.buttonBox}>
            <NextButton onClick={handleNext} />
            <PrevButton onClick={handleBack} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
