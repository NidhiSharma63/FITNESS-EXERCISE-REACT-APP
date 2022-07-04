import create from 'zustand';
import { devtools } from 'zustand/middleware';

const getClickedExercise = (state, exercise)=>{
  // console.log(exercise);

}

const useStore = create(
  devtools(
    set => ({
      TypesArray: [],
      showExerciseArray:[],
      ClickedExercise: 'all',
      setDataType:(data)=>{set(state => ({TypesArray: data}))},
      setShowExercise:(data)=>{set(state => ({showExerciseArray: data}))},
      GetClickedExercise: (exercise) => set(state => (getClickedExercise(state, exercise))),
    }),
  ),
);

export default useStore;