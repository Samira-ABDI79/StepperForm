import { Stack, Typography, Box, CardContent } from "@mui/material";

import { style } from "../Style/Form";

interface inputs {
  cityName: any;
  name: any;
  image: any;
  date: any;
}
export default function Card({ image, name, cityName, date }: inputs) {
  return (
    <>
      <Typography>اطلاعات خود را مرور کنید:</Typography>
      <Box id="card" sx={{ maxWidth: "60%", margin: "auto" }}>
        {image ? (
          <img
            style={{
              border: "1px solid black",
              marginTop: "2rem",
              width: "100%",
              aspectRatio: "2/1",
            }}
            src={image}
            title="user"
          />
        ) : (
          <div>no image</div>
        )}
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography
              gutterBottom
              variant="body1"
              component="label"
              sx={style.labelText}
            >
              نام ونام خانوادگی :
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {name}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography
              gutterBottom
              variant="body1"
              component="label"
              sx={style.labelText}
            >
              استان :
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {cityName}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography
              gutterBottom
              variant="body1"
              component="label"
              sx={style.labelText}
            >
              تاریخ تولد :
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {date}
            </Typography>
          </Stack>
        </CardContent>
      </Box>
    </>
  );
}
