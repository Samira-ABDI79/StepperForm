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
      <Box id="card" sx={{ maxWidth: "60%", margin: "1rem auto" }}>
        {image ? (
          <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
             
              <img
            style={{
              width: "300px",
              height:"300px",
            
            }}
            src={image}
            title="user"
          />
            </div>
            <div className="flip-card-back">
            
              <p>موفق باشی</p>
        
            </div>
          </div>
        </div>
          
        ) : (
          <div>no image</div>
        )}
        <CardContent sx={{mt:"1rem"}}>
          <Stack direction="row" justifyContent="start" alignItems="center">
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
          <Stack direction="row" justifyContent="start" alignItems="center">
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
          <Stack direction="row" justifyContent="start" alignItems="center">
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
