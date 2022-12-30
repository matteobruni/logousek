import React, { useState } from "react";
import ItemList from "./item-list";
import ItemRectList from "./item-rect-list";
import DarkModeSwitch from "../dark-mode-switch";
import {
  ApplicationNavigation,
  Navigation,
  SidebarWrapper,
  SidebarItemsWrapper,
  RoundFooterWrapper,
} from "./styled";
import { SidebarRectItemProps } from "./item-rect-list/rect-item";
import { ItemType } from "./item-list/item";
import RoundFooter from "@components/round-footer";

type ApplicationNavType = SidebarRectItemProps[];
type PageNavType = ItemType[];

type SidebarProps = {
  pageNav: PageNavType;
  applicationNav: ApplicationNavType;
};

const Sidebar: React.FC<SidebarProps> = ({ pageNav, applicationNav }) => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const toggleMenu = () => {
    setIsMenuShow((v) => !v);
  };
  return (
    <>
      <SidebarWrapper
        onMouseEnter={() => setIsMenuShow(true)}
        onMouseLeave={() => setIsMenuShow(false)}
        isMenuShow={isMenuShow}
      >
        <SidebarItemsWrapper isMenuShow={isMenuShow}>
          <Navigation>
            <h4>Navigace stránky</h4>
            <ItemList itemList={pageNav} setIsMenuShow={setIsMenuShow} />
          </Navigation>
          <ApplicationNavigation>
            <h4>Navigace aplikace</h4>
            <ItemRectList itemList={applicationNav} />
            <DarkModeSwitch />
          </ApplicationNavigation>
        </SidebarItemsWrapper>
      </SidebarWrapper>
      <RoundFooterWrapper>
        <RoundFooter
          customHeight={"4rem"}
          activityTypes={[
            {
              name: "menuButton",
              icon: isMenuShow ? "close" : "menu",
              clickable: true,
              onClick: toggleMenu,
              color: "grey",
            },
          ]}
        />
      </RoundFooterWrapper>
    </>
  );
};

export default Sidebar;
