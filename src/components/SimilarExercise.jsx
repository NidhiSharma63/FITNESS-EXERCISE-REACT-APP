import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import useStore from '../store';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = () => {
  const { SimiliarTargetExercise,SimiliarEquipmentExercise } = useStore();
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {SimiliarTargetExercise.length !== 0 ? <HorizontalScrollBar data={SimiliarTargetExercise} /> : <Loader />}
      </Stack>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {SimiliarEquipmentExercise.length !== 0 ? <HorizontalScrollBar data={SimiliarEquipmentExercise} /> : <Loader />}
      </Stack>
    </Box>
  )
};

export default SimilarExercises;