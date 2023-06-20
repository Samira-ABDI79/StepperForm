import { Stack, Typography } from "@mui/material";
import { style } from "../Style/Form";
interface RowDate{
    label:string
    text:string
}
export default function InformationRow ({label,text}:RowDate){
    return(
        <>
          <Stack direction="row" justifyContent="start" alignItems="center">
            <Typography
              gutterBottom
              variant="body1"
              component="label"
              sx={style.labelText}
            >
            {label}:
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {text}
            </Typography>
          </Stack>
        </>
    )
}