import React, { FC } from "react";
import {EmptyDetailedStateStyled} from "./EmptyDetailState.styled";

export const EmptyDetailState:FC = ()=>{
    const emptyMsg = "<- select an exercise on the left";
    return (<EmptyDetailedStateStyled>
        <h1>{emptyMsg}</h1>
    </EmptyDetailedStateStyled>)
};

