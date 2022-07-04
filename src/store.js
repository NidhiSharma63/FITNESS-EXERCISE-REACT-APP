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
      ClickedExercise: 'all',
      serchExercise:'',
      setDataType:(data)=>{set(state => ({TypesArray: data}))},
      setShowExercise:(data)=>{set(state => ({showExerciseArray: data}))},
      GetClickedExercise: (search) => set(state => ({serchExercise:search})),
    }),
  ),
);

export default useStore;