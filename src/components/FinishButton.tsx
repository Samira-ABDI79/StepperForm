import React from 'react';
import Button from '@mui/material/Button';

import { style } from '../Style/Form';

import { Link } from 'react-router-dom';
interface Props  {
  onClick: () => void ;
 
}

const FinishButton: React.FC<Props> = ({ onClick }:Props) => {
  return (
    <Button
    variant="contained"
                    sx={style.nextButton}
                    type="submit"
    onClick={onClick} >
   
   <Link style={{color:"inherit" , textDecoration:"none"}} to="/finish" > ثبت نهایی</Link>
    </Button>
   
  );
};

export default FinishButton;