import React, { useState } from "react";
import ItemList from "./item-list";
import ItemRectList from "./item-rect-list";
import DarkModeSwitch from "../dark-mode-switch";
import * as S from "./styled";
import { SidebarRectItemProps } from "./item-rect-list/rect-item";
import { ItemType } from "./item-list/item";
import { ColorsEnum } from "styles/colors";
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
      <S.SidebarWrapper
        onMouseEnter={() => setIsMenuShow(true)}
        onMouseLeave={() => setIsMenuShow(false)}
        isMenuShow={isMenuShow}
      >
        <S.SidebarItemsWrapper isMenuShow={isMenuShow}>
          <S.Navigation>
            <h4>Navigace stránky</h4>
            <ItemList itemList={pageNav} setIsMenuShow={setIsMenuShow} />
          </S.Navigation>
          <S.ApplicationNavigation>
            <h4>Navigace aplikace</h4>
            <ItemRectList itemList={applicationNav} />
            <DarkModeSwitch />
          </S.ApplicationNavigation>
        </S.SidebarItemsWrapper>
      </S.SidebarWrapper>
      <S.RoundFooterWrapper>
        <RoundFooter
          customHeight={"4rem"}
          activityTypes={[
            {
              name: "menuButton",
              icon: isMenuShow ? "close" : "menu",
              clickable: true,
              onClick: toggleMenu,
              color: ColorsEnum.lightGrey,
            },
          ]}
        />
      </S.RoundFooterWrapper>
    </>
  );
};

export default Sidebar;
