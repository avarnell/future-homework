import React, { FC, useContext, useEffect, useState } from "react";
import { IExerciseDetail } from "./types/ExerciseDetail";
import {
  StyledDetailHeader,
  StyledLabel,
  StyledVideo,
  StyledWrapper,
} from "./ExerciseDetail.styled";
import { ExerciseContext } from "../../context/ExerciseContext";

export const ExerciseDetail: FC<IExerciseDetail> = ({
  exercise,
  loadingSkill,
}) => {
  const [exerciseSkillLevel, setExerciseSkillLevel] = useState<any>(null);

  useEffect(() => {
    setExerciseSkillLevel(exercise.skill);
  }, [exercise.skill, loadingSkill]);

  return (
    <StyledWrapper>
      <StyledDetailHeader>{exercise.name}</StyledDetailHeader>
      {exercise.description && (
        <div>
          <StyledLabel>description</StyledLabel> - {exercise.description}
        </div>
      )}
      {exerciseSkillLevel && (
        <div>
          <StyledLabel>skill level</StyledLabel> - {exerciseSkillLevel.level} /{" "}
          {exerciseSkillLevel.max_level}
        </div>
      )}

      {exercise.video && (
        <StyledVideo controls src={exercise.video.url} width={"700"} />
      )}
    </StyledWrapper>
  );
};
