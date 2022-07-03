import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import Logo from '../assets/images/Logo.png'

const style= {
  width:'40px',
  height:"40px",
  margin:"0px 20px",
}

const link = {
  textDecoration:'none',
  color:'#3A1212'
}

const homeLink = {
  ...link,
  borderBottom:'2px solid #FF2625'
}

function Navbar() {
  return (
    <Stack
    direction="row"
    justifyContent="flex-start"
    sx={{gap:{sm:'122px',xs:'40px'}}}
    mt={{sm:'32px',xs:"20px"}}
    px="20px">
      <Link to = '/'>
        <img src={Logo} style={style}/>
      </Link>
      <Stack
      direction="row"
      fontSize="24px"
      gap="40px"
      alignItems="flex-end">
        <Link to='/home' style={homeLink}>
          Home
        </Link>
        <a href="#exercise" style={link}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar