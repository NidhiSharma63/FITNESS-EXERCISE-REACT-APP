import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Stack,Button,Box} from '@mui/material';
import Logo from '../assets/images/Logo.png'

const style= {
  width:'40px',
  height:"40px",
  margin:"0px 20px",
}

const link = {
  textDecoration:'none',
  color:'var(--secondary-color)'
}

const homeLink = {
  ...link,
  borderBottom:'2px solid #FF2625'
}

function Navbar() {

  const body = document.querySelector('body');
  const [theme,setTheme] = useState('');
  useEffect(()=>{
    const getTheme = localStorage.getItem('theme');
    if(getTheme === null){
      body.classList.add('light');
      setTheme('light');
    }else{
      body.classList.add(getTheme);
      setTheme(getTheme);
    }
  },[]);

  const changeTheme = () =>{
    body.className==='light' ? body.classList.add('Dark') : body.classList.remove('Dark');
    if(body.classList.contains('Dark')){
      localStorage.setItem('theme','Dark');
      setTheme('Dark');
    }else {
      localStorage.setItem('theme','light');
      setTheme('light');
    }
  }

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
        <Link to='/' style={homeLink}>
          Home
        </Link>
        <a href="#exercise" 
          style={link}
          onClick={()=>{
            window.scrollTo({ top:1600, behavior: 'smooth' });
          }}>Exercises</a>
          <Box
            p='3px'
            position="relative"
            width="70px"
            borderRadius="10px"
            height="30px"
            backgroundColor="var(--toggle-bg-color)"
            onClick={()=>changeTheme()}>
            <Box 
            position="absolute"
            cursor="pointer"
            height='80%'
            width='26px'
            backgroundColor='var(--background-color)'
            borderRadius='50%'
            transition='all 0.7s ease-in-out'
            className={theme==='Dark'?'move-btn':'no-move-btn'}></Box>
        </Box>
      </Stack>
      
    </Stack>
  )
}

export default Navbar