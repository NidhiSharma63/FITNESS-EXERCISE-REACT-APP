import React,{useState,useEffect} from 'react';
import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {fetchData,options,youtubeOptions} from '../utils/FetchData';
import SimilarExercise from '../components/SimilarExercise';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import useStore from '../store';
import { v4 as uuidv4 } from 'uuid';




function ExerciseDetails() {
  const {
    ClickedExercise,
    ClickedExerciseArray,
    setClickedExercise,
    setExerciseVideo,
    setSimiliarTargetExercise,
    setSimiliarEquipmentExercise
  } = useStore();


  const ID = useParams().id;
  useEffect(()=>{
    const exerciseDB = `https://exercisedb.p.rapidapi.com/exercises/exercise`;
    const youtubeVideos = `https://youtube-search-and-download.p.rapidapi.com/search?query=${ClickedExercise} exercise}}`

      const getData = async() =>{
        const exerciseData = await fetchData(`${exerciseDB}/${ID}`,options);
        setClickedExercise(exerciseData);

        const youtubeData = await fetchData(youtubeVideos,youtubeOptions);
        setExerciseVideo(youtubeData.contents);
        const targetMuscleExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/abs`, options);
        setSimiliarTargetExercise(targetMuscleExercisesData);

        const equimentExercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/body weight`, options);
        setSimiliarEquipmentExercise(equimentExercisesData);
      };
    // getData();
  },[])
  return (

    <Box>
      {
       ClickedExerciseArray && 
          <Details key={uuidv4()} item = {ClickedExerciseArray}/>
      }
      <ExerciseVideos />
      <SimilarExercise />
    </Box>
  )
}

export default ExerciseDetails;