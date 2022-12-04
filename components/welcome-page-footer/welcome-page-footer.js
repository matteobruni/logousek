import React from "react";
import ClickableIcon from "../clickable-icon/clickable-icon";
import ClickableIconWrapper from "../clickable-icon-wrapper/clickable-icon-wrapper";
import { WelcomePageFooterWrapper, ClickableIconContainer } from "./styled";

function WelcomePageFooter() {
  return (
    <WelcomePageFooterWrapper>
      <h2>Logousek</h2>
      <ClickableIconContainer>
        <ClickableIconWrapper>
          <ClickableIcon icon="facebook" />
          <ClickableIcon icon="instagram" />
          <ClickableIcon icon="tiktok" />
        </ClickableIconWrapper>
      </ClickableIconContainer>
      <p>2022 | Created By Petr Holčák</p>
    </WelcomePageFooterWrapper>
  );
}

export default WelcomePageFooter;
