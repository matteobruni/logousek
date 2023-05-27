import React, { useState, useMemo } from "react";
import RoundFooter from "@components/round-footer";
import { useTranslateFunctions } from "@hooks/useTranslateFunctions";
import { H4 } from "@components/typography/header";
import { ColorsEnum } from "styles/colors";
import ItemList from "./item-list";
import ItemRectList from "./item-rect-list";
import DarkModeSwitch from "../dark-mode-switch";
import * as S from "./styled";
import { SidebarRectItemProps } from "./item-rect-list/rect-item";
import { ItemType } from "./item-list/item";

type ApplicationNavType = SidebarRectItemProps[];
type PageNavType = ItemType[];

type SidebarProps = {
  pageNav: PageNavType;
  applicationNav: ApplicationNavType;
};

const Sidebar: React.FC<SidebarProps> = ({ pageNav, applicationNav }) => {
  const { tCommon } = useTranslateFunctions()
  const [isMenuShow, setIsMenuShow] = useState(false);
  const toggleMenu = () => {
    setIsMenuShow((v) => !v);
  };

  const roundFooterActivityTypes = useMemo(() => ([
    {
      name: "menuButton",
      icon: isMenuShow ? "close" : "menu",
      clickable: true,
      onClick: toggleMenu,
      color: ColorsEnum.lightGrey,
    },
  ]), [isMenuShow])

  return (
    <>
      <S.SidebarWrapper
        onMouseEnter={() => setIsMenuShow(true)}
        onMouseLeave={() => setIsMenuShow(false)}
        isMenuShow={isMenuShow}
      >
        <S.SidebarItemsWrapper isMenuShow={isMenuShow}>
          <S.Navigation>
            <H4>{tCommon("sideBar.currentSiteNavigation.title")}</H4>
            <ItemList itemList={pageNav} setIsMenuShow={setIsMenuShow} />
          </S.Navigation>
          <S.ApplicationNavigation>
            <H4>{tCommon("sideBar.applicationNavigation.title")}</H4>
            <ItemRectList itemList={applicationNav} />
            <S.DarkModeSwitchWrapper>
              <DarkModeSwitch />
            </S.DarkModeSwitchWrapper>
          </S.ApplicationNavigation>
        </S.SidebarItemsWrapper>
      </S.SidebarWrapper>
      <S.RoundFooterWrapper>
        <RoundFooter
          customHeight={"4rem"}
          activityTypes={roundFooterActivityTypes}
        />
      </S.RoundFooterWrapper>
    </>
  );
};

export default Sidebar;
