import React from 'react';
import {Box,Stack,Typography,Button} from '@mui/material';
import BannerImage from '../assets/images/banner.png'

function HeroBanner() {
  return (
    <Box
    sx={{mt:{lg:'181px',xs:'70px'},ml:{sm:'50px'}}}
    position="relative" p="20px">
        <Typography fontSize="26px" fontWeight="600" color="#d50000" mb={3}>
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{fontSize:{lg:'44px',xs:'40px'}}}>
            Sweat,Smile <br/>
            and Repeat
        </Typography>
        <Typography fontSize={'22px'} lineHeight={'45px'}  mb={3}>
            check the most effective exercises
        </Typography>
        <Button large variant="contained" color="error" href="#exercises">Explore Exercise</Button>
        <img src={BannerImage} alt="heroBanner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner