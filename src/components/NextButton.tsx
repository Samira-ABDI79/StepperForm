import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { style } from "../Style/Form";

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

const NextButton: React.FC<Props> = ({ onClick, disabled = false }: Props) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      sx={style.nextButton}
      type="submit"
      onClick={onClick}
    >
      <ArrowForwardIcon />
      <span> بعدی</span>
    </Button>
  );
};

export default NextButton;
