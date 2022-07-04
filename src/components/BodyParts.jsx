import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icon/gym.png';
import  useStore from '../store';

const BodyPart = ({item}) =>{
  const { GetClickedExercise } = useStore();
  return(
    <>
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{ background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
        onClick={(e) => {
          const keyword = e.target.innerText;
          const splitArray = keyword.split(' ');
          const search = splitArray.join(' ');
          console.log(search.toLowerCase())
          // const keyword = e.target.innerText
          //   .split(" ")
          //   .map((word) => word.toLowerCase())
          //   .join(" ");
          GetClickedExercise(search.toLowerCase());
          // GetClickedExercise(e.target.innerText);
        }}
      >
        <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
      </Stack>
    </>
  );
}
export default BodyPart;
