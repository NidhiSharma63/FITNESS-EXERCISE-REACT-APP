import React from 'react';
import ExerciseCard from './ExerciseCard';
import useStore from '../store';
import {Box,Typography,Stack} from '@mui/material';

function Exercises() {
  const { showExerciseArray } = useStore();
  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {
          showExerciseArray.length>0 &&
          showExerciseArray.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          ))
        }
      </Stack>
    </Box>
  )
}

export default Exercises