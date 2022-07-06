import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icon/gym.png';
import  useStore from '../store';

const BodyPart = ({item}) =>{
  const { GetClickedExercise } = useStore();
  if((typeof item)==='string'){
    console.log(item)

  }
  return(
    <>
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{ 
          background: '#fff', 
          borderBottomLeftRadius: '20px', 
          width: '270px', 
          height: '282px', 
          cursor: 'pointer', 
          gap: '47px' 
        }}
        onClick={(e) => {
          const keyword = e.target.innerText;
          const splitArray = keyword.split(' ');
          const search = splitArray.join(' ');
          GetClickedExercise(search.toLowerCase());
        }}
      >
        <img 
        src={Icon} alt="dumbbell" 
        style={{ width: '40px', height: '40px' }} />
        <Typography 
          fontSize="24px" 
          fontWeight="bold" 
          fontFamily="Alegreya" 
          color="#3A1212" 
          textTransform="capitalize"
          > {(typeof item)==='string'?item:item.name}</Typography>
      </Stack>
    </>
  );
}
export default BodyPart;
