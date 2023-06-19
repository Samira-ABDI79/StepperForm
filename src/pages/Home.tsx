import { Button, FormControl, FormLabel, Link, TextField ,Box, Container, Stack} from "@mui/material";
import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { Ostan } from "./data";
export default function Form1(){
  return(
    <>
   

       
        <Container>
        <Box sx={{width:"80%",border:"1px solid gray", borderRadius:"15px" , padding:"5rem 2.5rem",mt:"2rem"}} >
           
           <TextField 
               label="نام"
               // onChange={e => setEmail(e.target.value)}
               required
               variant="outlined"
               color="secondary"
               type="text"
               sx={{mb: 3}}
               fullWidth
               // value={email}
               // error={emailError}
            />
            <TextField 
               label="نام خانوادگی"
               // onChange={e => setPassword(e.target.value)}
               required
               variant="outlined"
               color="secondary"
               type="txt"
               // value={password}
               // error={passwordError}
               fullWidth
               sx={{mb: 3}}
            />
              <Autocomplete
             
            style={{width:"100%"}}
 disablePortal
 id="combo-box-demo"
 options={Ostan}
 sx={{ width: 300 }}
 renderInput={(params:any) => <TextField {...params} label="استان" fullWidth />}
/>
<FormControl sx={{mt:3}}fullWidth  >
<FormLabel id="radios">
تایخ تولد</FormLabel>
            <TextField type="date" fullWidth  ></TextField>
</FormControl>

          <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{mt:"2rem"}} >
          <Button variant="outlined" color="secondary" type="submit">
            
           
            <Link href="#" underline="none">
            قبلی
</Link>
            </Button>
          <Button variant="outlined" color="secondary" type="submit">
          <Link href="/upload" underline="none">
          بعدی
</Link>
          </Button>
       

          </Stack>
        
   </Box>
        </Container>
    
    </>
  )
}
