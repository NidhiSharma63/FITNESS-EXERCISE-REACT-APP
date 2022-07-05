import React,{useState,useEffect} from 'react';
import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {fetchData,options} from '../utils/FetchData';
import dataID from '../dataID';
import SimilarExercise from '../components/SimilarExercise';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import useStore from '../store';



function ExerciseDetails() {
  const {ClickedExercise,setClickedExercise} = useStore();

  // const ID = useParams().id;
  const ID = '0001';
  console.log(ClickedExercise)
  useEffect(()=>{
    setClickedExercise(dataID)
  //   const exerciseDB = `https://exercisedb.p.rapidapi.com/exercises/exercise/${ID}`;
  //   // console.log(exerciseDB);
  //   const getData = async() =>{
  //     const exerciseData = await fetchData(exerciseDB,options);
  //     console.log(exerciseData);
  //   }
  //   getData();
  },[])
  return (

    <Box>
      {
        ClickedExercise.length>0 && ClickedExercise.map((item,index)=>
          <Details key={index} {...item}/>
          )
      }
    </Box>
  )
}

export default ExerciseDetails;