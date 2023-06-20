import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { style } from '../Style/Form';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface Props  {
  onClick: () => void ;
 
}

const PrevButton: React.FC<Props> = ({ onClick }:Props) => {
  return (
    <Button
    variant="contained"
    sx={style.prevButton}
    onClick={onClick} >
   
   <span>   قبلی</span>
                 <ArrowBackIcon /> 
    </Button>
   
  );
};

export default PrevButton;