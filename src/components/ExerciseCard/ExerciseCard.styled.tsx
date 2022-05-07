import styled from "styled-components";
import {IStyledExerciseCard} from "./types/ExerciseCard";

export const StyledExerciseCard = styled.div<IStyledExerciseCard>`
  border-bottom: 2px dashed;
  border-color: ${({ selected }) => (selected ? 'palevioletred' : '#808080')};
  color : ${({ selected }) => (selected ? '#808080': 'palevioletred')};
  margin: 10px;
  height: 30px;
`;

export const CardTitle = styled.span`
  padding-left: 4px;
`;

