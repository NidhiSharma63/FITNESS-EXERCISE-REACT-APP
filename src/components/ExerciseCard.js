import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import useStore from '../store';


const ExerciseCard = ({ exercise }) => {
  const pElem = useRef(null);
  const { setClickedExerciseName } = useStore();
  return(
      <Link 
      className="exercise-card" 
      to={`/exercise/${exercise.id}`}
      onClick={(e)=>{setClickedExerciseName(pElem.current.innerText)}}>
        <img 
          src={exercise.gifUrl} 
          alt={exercise.name} 
          loading="lazy" />
        <Stack direction="row">
          <Button 
          sx={{ 
            ml: '21px', 
            color: '#fff', 
            background: '#FFA9A9', 
            fontSize: '14px', 
            borderRadius: '20px', 
            textTransform: 'capitalize' }}>
            {exercise.bodyPart}
          </Button>
          <Button 
            sx={{ 
              ml: '21px', 
              color: '#fff', 
              background: '#FCC757', 
              fontSize: '14px', 
              borderRadius: '20px', 
              textTransform: 'capitalize' 
            }}>
            {exercise.target}
          </Button>
        </Stack>
        <Typography 
          ml="21px" 
          fontFamily='Hahmlet'
          color="var(--secondary-color)" 
          sx={{ 
            fontSize: {
              lg: '24px', 
              xs: '20px' 
            } 
          }} 
          mt="11px" pb="10px" 
          textTransform="capitalize"
          ref={pElem}>
          {exercise.name}
        </Typography>
      </Link>
    )
};

export default ExerciseCard;
