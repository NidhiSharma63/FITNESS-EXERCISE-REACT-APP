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
      <Stack border='1px solid orange' display='flex' justifyContent='space-around'>
        <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }}/>
        <Typography>
          <CopyrightIcon fontSize='10px'/>2024.All Rights Reserved.
        </Typography>
      </Stack>
      <Box display='flex'>
        <Typography alignSelf='center' fontSize="22px"  fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">Contact us:</Typography>
        <Stack  pl='10px'>
          <Box component='span' mb='5px'> <TwitterIcon/><InstagramIcon/></Box>
          <Typography fontSize="20px" mb='5px'  fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"><EmailIcon/>:goldsgym@gmail.com</Typography>
          <Typography fontSize="20px" mb='5px'  fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"><LocalPhoneIcon/>:+1-844-867-5309</Typography>
        </Stack>
      </Box>
      <Stack sx={{display:'flex',alignItems:'center',justifyContent:'center'}}><Typography>Terms & Conditions | privacy policy</Typography></Stack>
    </Box>
    {/* <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by JavaScript Mastery</Typography> */}
  </Box>
);

export default Footer;