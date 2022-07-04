import React,{useState} from 'react';
import ExerciseCard from './ExerciseCard';
import useStore from '../store';
import {Box,Typography,Stack} from '@mui/material';
import Pagination from '@mui/material/Pagination';


function Exercises() {
  const [index,setIndex] = useState(0)
  const { showExerciseArray } = useStore();
  const itemsPerPage = 12;
  const numberOfPages = Math.ceil(showExerciseArray.length / itemsPerPage);
  
  const newExercise = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    return showExerciseArray.slice(start, start + itemsPerPage)
  });

  const paginate = (event, value) => {
    setIndex(value)
    // setCurrentPage(value);

    // window.scrollTo({ top: 1800, behavior: 'smooth' });
  };


  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {
          showExerciseArray.length>0 &&
          newExercise[index].map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          ))
        }
        <Pagination 
        defaultPage={1}  
        count={numberOfPages} 
        variant="outlined" 
        color="error" 
        shape="rounded"
        pages={index}
        onChange={paginate} />
      </Stack>
    </Box>
  )
}

export default Exercises