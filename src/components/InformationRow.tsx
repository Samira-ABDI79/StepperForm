import { Stack, Typography } from "@mui/material";
import { style } from "../Style/Form";
import { styled } from "@mui/material/styles";
import { theme } from "../Theme/theme";
interface RowDate {
  label: string;
  text: string;
}
const LabelText = styled(Typography)({
  color: theme.palette.common.gray,
  paddingLeft: "2rem",
  width: "8rem",
  direction: "rtl",
});
export default function InformationRow({ label, text }: RowDate) {
  return (
    <>
      <Stack direction="row" justifyContent="start" alignItems="center">
        <LabelText
          gutterBottom
          variant="body1"
          // component="label"
          // sx={style.labelText}
        >
          {label}:
        </LabelText>
        <Typography gutterBottom variant="body1" component="p">
          {text}
        </Typography>
      </Stack>
    </>
  );
}
