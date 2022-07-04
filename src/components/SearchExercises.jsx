import React,{useEffect,useState} from 'react';
import {Button,Stack,Typography,Box,TextField} from '@mui/material';
import {fetchData,options} from '../utils/FetchData';

const url = 'https://exercisedb.p.rapidapi.com/exercises'

function SearchExercises() {
  const [search,setSearch] = useState('');
  const [exercise,setExercise] = useState([]);

  useEffect(()=>{
    const fecthExerciseData = async() =>{
      const bodyPartsData = await Fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options);
    }
  },[])
  
  const handleSubmit = async(e) =>{
    if(search){
      const exerciseData = await fetchData(url,options);
      // bec0z i m using here syntax(()=>()) not this (()=>{}) so no need to say return
      const searchedExercise = exerciseData.filter((exercises)=>
        exercises.name.toLowerCase().includes(search) ||
        exercises.target.toLowerCase().includes(search) ||
        exercises.bodyPart.toLowerCase().includes(search) ||
        exercises.equipment.toLowerCase().includes(search)
      );
      setSearch('');
      setExercise(searchedExercise);
      console.log(searchedExercise)

    }


  }
  return (
    
    <Stack alignItems="center" mt={10} justifyContent="center" p="20px">
      <Typography textAlign='center' mb='50px' sx={{fontSize:{lg:'44px',xs:'30px'}}} fontWeight='700'>
        Awesome Exercises you <br/>should know
      </Typography>
      <Box position="relative">
        <TextField 
          value={search}
          placeholder="search exercises"
          onChange={(e)=>setSearch(e.target.value.toLowerCase())}
          type="text"
          height="76px"
          outline="none"
          sx={{
              input:{
                fontSize:'20px',
                border:'none',
                borderRadius:'4px',
              },
              width:{
                lg:'800px',
                xs:'350px'
              },
        }}/>
        <Button 
          sx={{
            width:{
              lg:'175px',
              xs:'80px'
            },
            fontSize:{
              lg:'20px',
              xs:'14px'
            },
            color:'#fff',
            bgcolor:'#FF2625',
            position:'absolute',
            right: 0,
            height:'56px'
          }}
          className='search-btn' 
          variant="contained" 
          color="error" 
          href="#exercises"
          onClick={handleSubmit}>Search
        </Button>
      </Box>
          {/* <Makerequest3/> */}
    </Stack>
  )
}

export default SearchExercises;