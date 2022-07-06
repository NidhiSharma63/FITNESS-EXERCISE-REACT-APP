import React from 'react';
import useStore from '../store';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = () => {
  const { exerciseVideo,ClickedExercise } = useStore();
  if(!exerciseVideo.length) return <Loader/>

  return (
    <Box 
      sx={{ 
        marginTop: { lg: '203px', xs: '20px' }}} 
        p="20px">
      <Typography 
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}  
        color="#000" 
        fontFamily='Hahmlet'
        mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{ClickedExercise}</span> exercise videos
      </Typography>
      <Stack 
        sx={{ 
          flexDirection: { lg: 'row' }, 
          gap: { lg: '110px', xs: '0px' } 
        }} 
        justifyContent="flex-start" 
        flexWrap="wrap" 
        alignItems="center">
        {exerciseVideo?.slice(0, 4)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img 
              style={{ 
                borderTopLeftRadius: '20px' 
              }} 
              src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography 
                sx={{ 
                  fontSize: { lg: '28px', xs: '18px' } 
                }} 
                fontFamily='Hahmlet'
                color="#000">
                {item.video.title}
              </Typography>
              <Typography 
                fontSize="14px" 
                color="#000"
                fontFamily='Hahmlet'
               >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos