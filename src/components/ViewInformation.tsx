import { Box, Container, Typography } from "@mui/material";
import {  FinishButton, PrevButton } from ".";
import { style } from "../Style/Form";
import type { RootState } from '../store/index'

import Card from "./Card";
import { useSelector } from "react-redux";
interface Props  {
    handleFinish: () => void ;
    handleBack: () => void ;
   
  }
export default function ViewInformation({
    handleFinish,
    handleBack,
  
    }:Props){
        const image  = useSelector((state: RootState) => state.User.image)
  
  const city  = useSelector((state: RootState) => state.User.city)
  const firstName  = useSelector((state: RootState) => state.User.firstName)
  const lastName  = useSelector((state: RootState) => state.User.lastName)
    return(
        <>
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
                  date={"fsdf"}
                />
                <Box sx={style.buttonBox}>
                  <FinishButton onClick={handleFinish} />
                  <PrevButton   onClick={handleBack} />
                </Box>
              </Box>
            </Container>
          </Box>
        </>
    )
}