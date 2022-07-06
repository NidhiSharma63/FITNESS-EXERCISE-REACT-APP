import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer'
import Home from './Pages/Home.jsx';
import ExerciseDetails from './Pages/ExerciseDetails.jsx';


import './App.jsx';
function App() {
  return (
    <Router>
      <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto' className='box'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/exercise/:id' element={<ExerciseDetails/>}/> */}
      </Routes>
      <Footer/>
      </Box>
    </Router>
  )
}

export default App;