import React,{useRef} from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icon/gym.png';
import  useStore from '../store';

const BodyPart = ({item}) =>{
  const { GetSearchExercise } = useStore();
  const pElem = useRef(null);
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
          const keyword = pElem.current.innerText;
          const splitArray = keyword.split(' ');
          const search = splitArray.join(' ');
          GetSearchExercise(search.toLowerCase());
        }}
      >
        <img 
        src={Icon} alt="dumbbell" 
        style={{ width: '40px', height: '40px' }} />
        <Typography 
          fontSize="24px" 
          fontFamily="Alegreya" 
          color="#3A1212" 
          textTransform="capitalize"
          ref={pElem}
          textAlign="center"
          p='5px'
          > {(typeof item)==='string'?item:item.name}</Typography>
      </Stack>
    </>
  );
}
export default BodyPart;
