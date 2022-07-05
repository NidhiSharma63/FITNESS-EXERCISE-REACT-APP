import React,{useEffect,useState} from 'react';
import {Button,Stack,Typography,Box,TextField} from '@mui/material';
import {fetchData,options} from '../utils/FetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
import useStore from '../store';
import data from '../data';


const url = 'https://exercisedb.p.rapidapi.com/exercises'

function SearchExercises() {
  const  {
  TypesArray,
  setDataType,
  setShowExercise,
  GetSearchExercise}  = useStore()
  const [search,setSearch] = useState('');

  useEffect(()=>{
    setShowExercise(data)
    const fecthExerciseData = async() =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options);
      setDataType([...bodyPartsData,'all']);
      const exerciseData = await fetchData(url,options);
      setShowExercise(exerciseData);
    }
    fecthExerciseData();
    setSearch('')
  },[]);

  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(search){
      GetSearchExercise(search);
    }
  }
  return (
    
    <Stack alignItems="center" mt={10} justifyContent="center" p="20px">
      <Typography 
      textAlign='center' 
      mb='50px' 
      sx={{fontSize:{lg:'44px',xs:'30px'}}} 
      fontWeight='700'>
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
      <Box>
        <HorizontalScrollBar Array={TypesArray}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises;