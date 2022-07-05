import React,{useState,useEffect} from 'react';
import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {fetchData,options,youtubeOptions} from '../utils/FetchData';
import dataID from '../dataID';
import SimilarExercise from '../components/SimilarExercise';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import useStore from '../store';



function ExerciseDetails() {
  const {ClickedExercise,ClickedExerciseArray,setClickedExercise,setExerciseVideo} = useStore();
  // console.log(ClickedExerciseArray);

  const ID = useParams().id;
  // const ID = '0001';
  useEffect(()=>{
    // setClickedExercise(dataID)
    const exerciseDB = `https://exercisedb.p.rapidapi.com/exercises/exercise/${ID}`;
    const youtubeVideos = `https://youtube-search-and-download.p.rapidapi.com/search?query=${ClickedExercise} exercise}}`

      const getData = async() =>{
        const exerciseData = await fetchData(exerciseDB,options);
        console.log(ClickedExerciseArray);
        setClickedExercise(exerciseData);

        const youtubeData = await fetchData(youtubeVideos,youtubeOptions);
        setExerciseVideo(youtubeData.contents);

        const targetMuscleExercisesData = await fetchData(`${exerciseDB}/exercises/target/${exerciseData.target}`, options);
        console.log(targetMuscleExercisesData);
      };
    getData();
  },[])
  return (

    <Box>
      {
       ClickedExerciseArray && 
          <Details item = {ClickedExerciseArray}/>
      }
      <ExerciseVideos />
    </Box>
  )
}

export default ExerciseDetails;