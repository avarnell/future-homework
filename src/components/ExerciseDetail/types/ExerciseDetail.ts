import {IExercise} from "../../ExerciseCard/types/ExerciseCard";

export interface IExerciseDetail {
    exercise: IExercise;
    loadingSkill : boolean;
}