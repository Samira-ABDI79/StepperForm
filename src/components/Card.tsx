import {  Typography, Box, CardContent } from "@mui/material";
import InformationRow from "./InformationRow"


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
          <InformationRow label="نام ونام خانوادگی " text={name} />
          <InformationRow label="استان" text={cityName} />
          <InformationRow label="تاریخ تولد " text={date} />
        </CardContent>
      </Box>
    </>
  );
}
