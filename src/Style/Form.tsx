import { styled } from "@mui/material/styles";
import { Box, FormLabel } from "@mui/material";
import { theme } from "../Theme/theme";

const labelText = {
  color: "gray",
  paddingLeft: "2rem",
  width: "8rem",
  direction: "rtl",
};
export const FormWrapper = styled(Box)({
  padding: "2rem",
  borderRadius: "1rem",
  backgroundColor: "hsl(0, 0%, 100%)",
  border: "4px solid hsl(0, 0%, 90%)",
});
export const LabelForm = styled(FormLabel)({
  color: theme.palette.common.gray1,
  fontSize: "15px",
  fontWeigt: "400",
  mb: "16px",

  "& .MuiFormLabel-root": {
    padding: "1rem 0",
    fontWeight: "400",
    lineHeight: "1",
  },
  "& .css-qe94m5-MuiFormLabel-root": {
    fontWeight: "400",

    padding: "0",
  },
});
const FormLabelStyle = {
  color: "#696969",
  fontSize: "15px",
  fontWeigt: "400",
  mb: "20px",
};
const formWrapper = {
  width: { lg: "30rem", sm: "90%" },
  minHeight: "35rem",
  height: "44rem",

  borderRadius: "15px",
  padding: { lg: "2rem 2.5rem", sm: "2rem 3.5rem" },
  mt: "2rem",

  backgroundColor: "#fff",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
};
const inputStyle = {
  display: "block",
  width: "100%",
  height: "calc(1.5em + 0.75rem + 2px)",
  padding: "0.375rem 0.75rem",
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#484848!important",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  borderBottom: "1px solid #e1e1e1",
  transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  fontFamily: "iransans",
  marginTop: "10px",
};
const steperWrapper = {
  mt: "3rem",
  padding: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const buttonBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mt: "1rem",
};
const nextButton = {
  backgroundColor: "rgb(0, 132, 168)",

  padding: "9px 20px",
  borderRadius: "15px",
  fontSize: "15px",
  color: "#fff",
  width: "8rem",
  display: "flex",
  justifyContent: "space-around",
  fontWeight: "300",

  "&:hover": {
    backgroundColor: "rgb(0, 132, 168)",
  },
};
const prevButton = {
  fontSize: " 15px",

  fontWeight: "300",
  display: "flex",
  justifyContent: "space-around",
  background: "#fba60a",
  color: "#fff",
  padding: "9px 20px",
  borderRadius: "15px",

  width: "8rem",
  mr: "1rem",
  "&:hover": {
    background: "#fba60a",
  },
};
const stepStyle = {
  my: "1rem",

  fontSize: " 36px",
  lineHeight: "52px",
  fontWeight: "700",
  color: "rgb(64, 64, 64)",
};
const UploadBox = {
  background: "#a0a0a0",
  width: "14rem",
  margin: "3rem auto ",
  padding: "9px 20px",
  borderRadius: "15px",
  border: "1px dashed black",
  height: "8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const StepLabel = { margin: "0 0.2rem" };
export const style = {
  labelText,
  FormLabelStyle,
  formWrapper,
  inputStyle,
  steperWrapper,
  buttonBox,
  nextButton,
  prevButton,
  stepStyle,
  StepLabel,
  UploadBox,
};
// ************************************************************
export const ImageWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    height: "87%",
  },
  img: {
    width: "100%",
    height: "100%",
    aspectRatio: "1",
    objectFit: "cover",
  },

  "&.main": {
    height: "calc(100vmin - 67px)",
    maxHeight: "unset",
    maxWidth: "unset",
    [theme.breakpoints.up("sm")]: {
      height: "89%",
    },
    "& .MuiSvgIcon-root": {
      top: "10px",
      right: "6px",
      padding: "12px",
      fontSize: "30px",
    },
  },
  input: {
    visibility: "hidden",
    position: "absolute",
    width: "100%",
  },
  "& .MuiSvgIcon-root": {
    [theme.breakpoints.up("sm")]: {
      top: "5px",
      padding: "6px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "4px",
      fontSize: "18px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "8px",
      fontSize: "22px",
    },
  },
}));
