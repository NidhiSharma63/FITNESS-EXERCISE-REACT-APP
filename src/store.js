import create from 'zustand';
import { devtools } from 'zustand/middleware';

const getClickedExercise = (state, search)=>{
  return(
    state.showExerciseArray.filter((item)=>(
      item.name.toLowerCase().includes(search) ||
      item.target.toLowerCase().includes(search) ||
      item.bodyPart.toLowerCase().includes(search) ||
      item.equipment.toLowerCase().includes(search)
  ))
  );
}

const useStore = create(
  devtools(
    set => ({
      TypesArray: [],
      showExerciseArray:[],
      ClickedExerciseArray: [],
      serchExercise:'',
      ClickedExercise:'',
      exerciseVideo:[],

      setDataType:(data)=>{set(state => ({TypesArray: data}))},
      setShowExercise:(data)=>{set(state => ({showExerciseArray: data}))},
      GetSearchExercise: (search) => set(state => ({serchExercise:search})),
      setClickedExercise: (data) => set(state => ({ClickedExerciseArray: data})),
      setClickedExerciseName: (name) => set(state => ({ClickedExercise:name})),
      setExerciseVideo: (data) => set(state => ({exerciseVideo: data})),
    }),
  ),
);

export default useStore;