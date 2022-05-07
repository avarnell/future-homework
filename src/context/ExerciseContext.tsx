import React, { FC, useState } from "react";
import { IExerciseContext } from "./types/ExerciseContext";

export const ExerciseContext = React.createContext<IExerciseContext | null>(
  null
);

export const ExerciseProvider: FC<any> = ({ children }) => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [isLoadingSkill, setIsLoadingSkill] = useState(false);

  const store: IExerciseContext = {
    selectedExercise: [selectedExercise, setSelectedExercise],
    currentFilter: [currentFilter, setCurrentFilter],
    isLoadingSkill: [isLoadingSkill, setIsLoadingSkill],
  };

  return (
    <ExerciseContext.Provider value={store}>
      {children}
    </ExerciseContext.Provider>
  );
};
