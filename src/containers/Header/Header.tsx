import React, { FC } from "react";
import {HeaderStyled, HeaderText} from "./Header.styled";

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <HeaderText> Future Vision! </HeaderText>
    </HeaderStyled>
  );
};
