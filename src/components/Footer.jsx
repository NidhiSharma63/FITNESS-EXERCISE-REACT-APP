import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" p='20px 10px'>
    <Box sx={{border:'1px solid red'}} display='flex' justifyContent='space-between'>
      <Stack display='flex' justifyContent='space-around'>
        <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }}/>
        <Box>
          <Typography><CopyrightIcon fontSize='10px'/>2024.All Rights Reserved.</Typography>
          <Typography sx={{display:{md:'none',sm:'flex',xs:'none'}}}>Terms & Conditions | privacy policy</Typography>
        </Box>

      </Stack>
      <Box display='flex' sx={{flexDirection:{sm:'column',md:'row'}}}>
        <Typography 
          sx={{alignSelf:{sm:'flex-start',md:'center'}}}
          fontSize="22px"  
          fontFamily="Alegreya" 
          color="#3A1212" 
          textTransform="capitalize">Contact us:</Typography>
        <Stack  pl='10px' spacing={.5}>
          <Box component='span'> <TwitterIcon/><InstagramIcon/></Box>
          <Typography fontSize="20px"  fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"><EmailIcon/>:goldsgym@gmail.com</Typography>
          <Typography fontSize="20px"  fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"><LocalPhoneIcon/>:+1-844-867-5309</Typography>
        </Stack>
      </Box>
      <Stack 
       sx={{display:{md:'flex',sm:'none'},alignItems:'center',justifyContent:'center', flexWrap:'wrap'}}
     ><Typography >Terms & Conditions | privacy policy</Typography></Stack>
    </Box>
  </Box>
);

export default Footer;