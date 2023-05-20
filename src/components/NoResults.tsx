import sad_pepe from "../assets/sad_pepe.png";
import {StyledEmptyContainer, StyledParagraphWhite} from "../common/Styles";
import React from "react";

export function NoResults() {
    return (
        <StyledEmptyContainer>
            <img src={sad_pepe} alt="sad pepe" width="300"/>
            <StyledParagraphWhite>Nothing to show...</StyledParagraphWhite>
        </StyledEmptyContainer>
    );
}