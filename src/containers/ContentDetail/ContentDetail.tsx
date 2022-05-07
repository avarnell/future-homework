import React, {FC, useContext} from "react";
import { ContentDetailStyled } from "./ContentDetail.styled";
import { EmptyDetailState } from "../../components/EmptyDetailState/EmptyDetailState";
import { ExerciseContext } from "../../context/ExerciseContext";
import {ExerciseDetail} from "../../components/ExerciseDetail/ExerciseDetail";

export const ContentDetail: FC = () => {
  const context = useContext(ExerciseContext);

  let detailedExercise = null;
  let isLoadingSkill = false;
  if (context?.selectedExercise) {
    detailedExercise = context.selectedExercise[0];
    isLoadingSkill = context.isLoadingSkill[0];
  }

  return (
    <ContentDetailStyled>
      {detailedExercise === null ? (
        <EmptyDetailState />
      ) : (
        <ExerciseDetail exercise={detailedExercise} loadingSkill={isLoadingSkill}/>
      )}
    </ContentDetailStyled>
  );
};
