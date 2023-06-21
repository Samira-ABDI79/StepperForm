import { Box, Container, Typography } from "@mui/material";
import { FinishButton, PrevButton } from ".";
import { style } from "../Style/Form";
import type { RootState } from "../store/index";

import Card from "./Card";
import { useSelector } from "react-redux";
interface Props {
  handleFinish: () => void;
  handleBack: () => void;
}
export default function ViewInformation({ handleFinish, handleBack }: Props) {
  const { date, lastName, firstName, city, image } = useSelector(
    (state: RootState) => state.User
  );
  return (
    <>
      <Box className="marginBottom">
        <Container>
          <Box sx={style.formWrapper}>
            <Typography align="center" sx={style.stepStyle}>
              ثبت و نمایش
            </Typography>
            <Card
              cityName={city}
              image={image}
              name={`${firstName} ${lastName}`}
              date={date}
            />
            <Box sx={style.buttonBox}>
              <FinishButton onClick={handleFinish} />
              <PrevButton onClick={handleBack} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
