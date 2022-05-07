import React, { FC, useContext, useEffect, useState } from "react";

import { StyledLeftBar } from "./Leftbar.styled";
import { ILeftbar } from "./types/Leftbar";
import { ExerciseList } from "./components/ExerciseList/ExerciseList";
import { SearchBar } from "./components/Searchbar/Searchbar";
import { ExerciseContext } from "../../context/ExerciseContext";

export const Leftbar: FC<ILeftbar> = ({ exerciseList }) => {
  const [filteredList, setFilteredList] = useState(exerciseList);
  const context = useContext(ExerciseContext);

  useEffect(() => {
    if (context?.currentFilter[0]?.length) {
      const currentFilterResults = exerciseList ? exerciseList.filter((exercise) => {
        const lowerCaseName = exercise.name.toLowerCase();
        return lowerCaseName.includes(context?.currentFilter[0].toLowerCase());
      }) : null;

      setFilteredList(currentFilterResults);
    } else {
      setFilteredList(exerciseList);
    }
  }, [context?.currentFilter[0], exerciseList]);

  return (
    <StyledLeftBar>
      <SearchBar />
      <ExerciseList exerciseList={filteredList} />
    </StyledLeftBar>
  );
};
