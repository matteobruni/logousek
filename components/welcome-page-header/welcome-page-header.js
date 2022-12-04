import React from "react";
import styled from "./styles.module.css";
import { WelcomePageHeaderWrapper, UnderlineBlock, WelcomePageHeaderContainer, WelcomePageHeaderText } from "./styled";

function WelcomePageHeader({ content, children }) {
  return (
    <WelcomePageHeaderWrapper>
      <WelcomePageHeaderContainer>
        <WelcomePageHeaderText>{content || children}</WelcomePageHeaderText>
        <UnderlineBlock />
      </WelcomePageHeaderContainer>
    </WelcomePageHeaderWrapper>
  );
}

export default WelcomePageHeader;
