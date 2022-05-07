import React, { FC, useContext } from "react";
import { StyledSearchBar } from "./Searchbar.styled";
import { ExerciseContext } from "../../../../context/ExerciseContext";

export const SearchBar: FC = () => {
  const context = useContext(ExerciseContext);
  const searchText = "search...";

  const updateFilter = (event: React.SyntheticEvent): void => {
    let target = event.target as HTMLInputElement;

    if (context) {
      const updateFilter = context.currentFilter[1];
      updateFilter(target.value);
    }
  };

  return <StyledSearchBar placeholder={searchText} onChange={updateFilter} />;
};
