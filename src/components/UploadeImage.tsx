import { Box, Container, Typography, Stack } from "@mui/material";
import { style } from "../Style/Form";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import { useState } from "react";
import {   useDispatch } from "react-redux";

import {  interImage} from "../store/FormSlice"


interface Props  {
  
    handleNext: () => void ;
    handleBack: () => void ;
  }
export default function UploadImage({
    handleNext,
    handleBack,
    }:Props){
 
  const [fileName, setFileName] = useState('');

  const dispatch = useDispatch()
        function handleUploadImage(e: any) {
            const file = e.target.files[0];
            const reader = new FileReader();
            setFileName(file.name);
            reader.onload = () => {
          
    dispatch(interImage(reader.result as any))

            };
            reader.readAsDataURL(file);
          }
    return(
        <Box className="marginBottom" >
        <Container>
          <Box
            component="form"
            // onSubmit={handleSubmit(handleFinish)}
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
              <PrevButton   onClick={handleBack} />
            </Box>
          </Box>
        </Container>
      </Box>
    )
}