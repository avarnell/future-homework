import {IExercise} from "../../components/ExerciseCard/types/ExerciseCard";

export interface IExerciseContext {
    selectedExercise : [IExercise| null, (value: any) => void];
    currentFilter : [any, (value: any) => void];
    isLoadingSkill: [boolean, (value:boolean)=>void];
}