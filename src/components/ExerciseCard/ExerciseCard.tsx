import React, { FC, useContext, useEffect, useState } from "react";
import { IExerciseCard } from "./types/ExerciseCard";
import { CardTitle, StyledExerciseCard } from "./ExerciseCard.styled";
import { ExerciseContext } from "../../context/ExerciseContext";

export const ExerciseCard: FC<IExerciseCard> = ({ exercise }) => {
  const context = useContext(ExerciseContext);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(context?.selectedExercise[0]?.id === exercise.id);
  }, [context?.selectedExercise[0]]);

  const selectExercise = () => {
    if (context) {
      if (!exercise.skill) {
        const setIsLoadingSkill = context.isLoadingSkill[1];
        setIsLoadingSkill(true);

        fetch(
          `https://candidate.staging.future.co/sandbox/api/exercises/${exercise.id}/predictions`
        )
          .then((res) => res.json())
          .then((data) => {
            exercise.skill = data.skill_level;
            setIsLoadingSkill(false);
          });
      }

      const setSelectedExercise = context.selectedExercise[1];

      setSelectedExercise(exercise);
    }
  };

  return (
    <StyledExerciseCard onClick={selectExercise} selected={selected}>
      <CardTitle>{exercise.name}</CardTitle>
    </StyledExerciseCard>
  );
};
