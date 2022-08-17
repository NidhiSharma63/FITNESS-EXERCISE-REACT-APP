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
      <Link to='/FITNESS-EXERCISE-REACT-APP'>
        <img src={Logo} style={style}/>
      </Link>
      <Stack
        direction="row"
        fontSize="24px"
        gap="40px"
        alignItems="flex-end">
        <Link to='/FITNESS-EXERCISE-REACT-APP' style={homeLink}>
          Home
        </Link>
        <a href="#exercise" 
          style={link}
          onClick={()=>{
            window.scrollTo({ top:1600, behavior: 'smooth' });
          }}>Exercises</a>
      </Stack>
      
    </Stack>
  )
}

export default Navbar