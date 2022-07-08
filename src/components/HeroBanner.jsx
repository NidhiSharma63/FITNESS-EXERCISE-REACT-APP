import React from 'react';
import {Box,Stack,Typography,Button} from '@mui/material';
import BannerImage from '../assets/images/banner.png';

function HeroBanner() {
  return (
      <Box
        sx={{
          mt:{lg:'181px',xs:'70px'},ml:{sm:'50px'},
        }}
        position="relative" p="20px">
          <Typography 
          
            fontSize="36px" 
            color="var(--primary-color)"
            fontFamily='Hahmlet'
            mb={3}>
              Fitness Club
          </Typography>
          <Typography 
            fontWeight={700}
            fontFamily='Hahmlet'
            color='var(--secondary-color)'
            sx={{
              fontSize:{lg:'44px',xs:'40px'}
            }}>
              Sweat,Smile <br/>
              and Repeat
          </Typography>
          <Typography 
            fontSize={'22px'} 
            lineHeight={'45px'} 
            color='var(--secondary-color)' 
            mb={3}>
              check the most effective exercises
          </Typography>
          <Button 
            variant="contained" 
            color="error" 
            href="#exercises">Explore Exercise</Button>
          <Typography 
            fontWeight={600} 
            color="var(--accent-color)" 
            sx={{
              opacity:0.1,display:{lg:'block',xs:'none'}
            }} fontSize="200px">
            Exercises
          </Typography>
          <img 
            src={BannerImage} 
            alt="heroBanner" 
            className='hero-banner-img'/>
        </Box>
  )
}

export default HeroBanner