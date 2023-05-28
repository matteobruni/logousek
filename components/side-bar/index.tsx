import React, { useState, useMemo, useEffect } from "react";
import RoundFooter from "@components/round-footer";
import useWindowDimensions from '@hooks/useWindowDimensions'
import { ColorsEnum } from "styles/colors";
import DarkModeSwitch from "../dark-mode-switch";
import { RectItemProps } from "./application-navigation/item-rect-list/rect-item";
import ApplicationNavigation from "./application-navigation";
import PageNavigation from "./page-navigation";
import { ItemType } from "./page-navigation/item-list/item";
import * as S from "./styled";

type ApplicationNavType = RectItemProps[];
type PageNavType = Omit<ItemType, "isMenuShow">[];

type SidebarProps = {
  pageNav: PageNavType;
  applicationNav: ApplicationNavType;
};

const Sidebar: React.FC<SidebarProps> = ({ pageNav, applicationNav }) => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const { width } = useWindowDimensions();
  const toggleMenu = () => {
    setIsMenuShow((v) => !v);
  };

  useEffect(() => {
    setIsMenuShow(false)
  }, [width])

  const roundFooterActivityTypes = useMemo(() => ([
    {
      name: "menuButton",
      icon: isMenuShow ? "close" : "menu",
      clickable: true,
      onClick: toggleMenu,
      color: ColorsEnum.lightGrey,
    },
  ]), [isMenuShow])

  const onSidebarMouseLeavehandle = () => {
    if (width && (width >= 1024)) {
      setIsMenuShow(false)
    }
  }

  return (
    <>
      <S.SidebarWrapper
        onMouseEnter={() => setIsMenuShow(true)}
        onMouseLeave={onSidebarMouseLeavehandle}
        isMenuShow={isMenuShow}
      >
        <S.SidebarItemsWrapper isMenuShow={isMenuShow}>
          <S.MobileDarkModeSwitchWrapper>
            <DarkModeSwitch />
          </S.MobileDarkModeSwitchWrapper>
          <PageNavigation isMenuShow={isMenuShow} setIsMenuShow={setIsMenuShow} pageNav={pageNav} />
          <ApplicationNavigation isMenuShow={isMenuShow} applicationNav={applicationNav} />
        </S.SidebarItemsWrapper>
      </S.SidebarWrapper >
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
