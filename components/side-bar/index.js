import React, {useState} from "react";
import SidebarItemList from "./side-bar-item-list";
import SidebarItemRectList from "./side-bar-item-rect-list";
import DarkModeSwitch from "../dark-mode-switch";
import {
  ApplicationNavigation,
  WelcomePageNavigation,
  SidebarWrapper,
  SidebarItemsWrapper,
} from "./styled";

function Sidebar({ pageNav, applicationNav }) {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const toggleMenu = () => {
    setIsMenuShow((v) => !v);
  };
  return (
    <SidebarWrapper
      onMouseEnter={() => setIsMenuShow(true)}
      onMouseLeave={() => setIsMenuShow(false)}
      isMenuShow={isMenuShow}
    >
      <SidebarItemsWrapper isMenuShow={isMenuShow}>
        <WelcomePageNavigation>
          <h4>Navigace stránky</h4>
          <SidebarItemList itemList={pageNav} setIsMenuShow={setIsMenuShow}/>
        </WelcomePageNavigation>
        <ApplicationNavigation>
          <h4>Navigace aplikace</h4>
          <SidebarItemRectList itemList={applicationNav} />
          <DarkModeSwitch />
        </ApplicationNavigation>
      </SidebarItemsWrapper>
    </SidebarWrapper>
  );
}

export default Sidebar;
