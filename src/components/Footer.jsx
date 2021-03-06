import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => (
  <Box
    mt="80px" 
    bgcolor="var(--footer-bg-color)" 
    p='20px 10px'>
    <Box 
      sx={{flexDirection:{sm:'row',xs:'column'}}} 
      display='flex' 
      alignItems='center'
      justifyContent='space-between'>
      <Stack 
        display='flex' 
        justifyContent='space-around'>
        <img src={Logo} alt="logo" 
          style={{ width: '180px', height: '41px' }}/>
        <Box sx={{mt:{xs:'10px',sm:'0px'}}}>
          <Typography
            fontFamily='Hahmlet'
            color='var(--secondary-color)'
            >
            <CopyrightIcon fontSize='10px'/>2024.All Rights Reserved.
          </Typography>
          <Typography
            fontFamily='Hahmlet'
            color='var(--secondary-color)'
            sx={{display:{md:'none',sm:'flex',xs:'none'}}}
          >Terms & Conditions | privacy policy</Typography>
        </Box>
      </Stack>
      <Box 
        display='flex' 
        sx={{flexDirection:{sm:'column',md:'row'},
        mt:{xs:'20px',sm:'0px'}}}>
        <Typography 
          color='var(--secondary-color)'
          sx={{alignSelf:{sm:'flex-start',md:'center',xs:'center'}}}
          fontSize="22px"  
          fontFamily='Hahmlet'
          textTransform="capitalize">Contact us:</Typography>
        <Stack  pl='10px' spacing={.5}>
          <Box component='span' 
            color='var(--secondary-color)'
            > <TwitterIcon/><InstagramIcon/></Box>
          <Typography 
            fontSize="20px"  
            fontFamily='Hahmlet'
            color='var(--secondary-color)'
            ><EmailIcon/>:goldsgym@gmail.com</Typography>
          <Typography 
            fontSize="20px"  
            fontFamily='Hahmlet'
            color='var(--secondary-color)'
            ><LocalPhoneIcon/>:+1-844-867-5309</Typography>
        </Stack>
      </Box>
      <Stack 
       sx={{display:{md:'flex',sm:'none'},
       mt:{xs:'20px',sm:'0px'},
       alignItems:'center',
       justifyContent:'center', 
       flexWrap:'wrap'}}
      ><Typography 
        color='var(--secondary-color)'
        fontFamily='Hahmlet'
      >Terms & Conditions | privacy policy</Typography></Stack>
    </Box>
  </Box>
);

export default Footer;