import React from "react";
import { StyledBackIconWrapper, StyledBackIcon } from "./styled";

export default function BackIcon({onClick}) {
  return (
    <StyledBackIconWrapper onClick={onClick}>
      <StyledBackIcon className={`material-icons`}>close</StyledBackIcon>
    </StyledBackIconWrapper>
  );
}
