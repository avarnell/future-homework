import React, { FC, useEffect } from "react";

import { IExerciseList } from "../../types/Leftbar";
import { ExerciseCard } from "../../../../components/ExerciseCard/ExerciseCard";
import {ExerciseListStyled, StyledEmptyMsg} from "./ExerciseList.styled";

export const ExerciseList: FC<IExerciseList> = ({ exerciseList }) => {
  const emptyText = "no results found ¯\\_(ツ)_/¯";

  const exerciseCards = exerciseList?.map((exercise: any) => {
    return <ExerciseCard exercise={exercise} key={`exercise_${exercise.id}`} />;
  });

  return (
    <ExerciseListStyled>
      {exerciseCards && exerciseCards.length !== 0 ? exerciseCards : <StyledEmptyMsg>{emptyText}</StyledEmptyMsg>}
    </ExerciseListStyled>
  );
};
