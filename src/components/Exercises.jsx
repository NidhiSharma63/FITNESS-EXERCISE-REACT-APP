import React,{ useState,useEffect } from 'react';
import ExerciseCard from './ExerciseCard';
import useStore from '../store';
import {Box,Typography,Stack} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import {fetchData,options} from '../utils/FetchData';
import Loader from './Loader';

function Exercises() {
  const [index,setIndex] = useState(0)
  const { showExerciseArray,serchExercise } = useStore();
  const [exercise,setExercise] = useState([]);
  console.log(serchExercise)
  useEffect(() => {
    if(serchExercise!=='' && serchExercise!=='all'){
      const getData = async() =>{
        const bodyPartData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${serchExercise}`,options);
        setExercise(bodyPartData);
      }
      getData();
    }else if(serchExercise==='all'){
      setExercise(showExerciseArray); 
    }else{
      setExercise(showExerciseArray);
    }
  }, [showExerciseArray,serchExercise]);


  
  const itemsPerPage = 12;
  const numberOfPages = Math.ceil(exercise.length / itemsPerPage);
  
  const newExercise = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return exercise.slice(start, start + itemsPerPage)
  });

  const paginate = (event, value) => {
    setIndex(value)
    window.scrollTo({ top: 1600, behavior: 'smooth' });
  };

  if(!exercise.length) return <Loader/>
  return (
    <Box 
    id="exercises" 
    sx={{ mt: { lg: '109px' } }}
      mt="50px" p="20px">
      <Typography 
      variant="h4"
      fontFamily='Hahmlet'
      sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
      Showing Results</Typography>
      <Stack 
      direction="row" 
      sx={{ gap: { lg: '107px', xs: '50px' } }} 
      flexWrap="wrap" 
      justifyContent="center">
        {
          exercise.length>0 &&
          newExercise[index].map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          ))
        }
        {numberOfPages>1 &&
        
        <Pagination 
        defaultPage={1}  
        count={numberOfPages-1} 
        variant="outlined" 
        color="error" 
        shape="rounded"
        pages={index}
        onChange={paginate} />
        }
      </Stack>
    </Box>
  )
}

export default Exercises;