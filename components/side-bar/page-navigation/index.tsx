import React from "react";

import { useTranslateFunctions } from "@hooks/useTranslateFunctions";
import { H4 } from "@components/typography/header";

import ItemList from "./item-list";
import { ItemType } from "./item-list/item";
import * as S from "./styled";

type PageNavType = Omit<ItemType, "isMenuShow">[];

type SidebarProps = {
  pageNav: PageNavType;
  setIsMenuShow: (value: boolean) => void;
  isMenuShow: boolean;
};

const PageNavigation: React.FC<SidebarProps> = ({ pageNav, setIsMenuShow, isMenuShow }) => {
  const { tCommon } = useTranslateFunctions()


  return (
    <S.PageNavigationWrapper>
      <H4 align="center">{tCommon("sideBar.currentSiteNavigation.title")}</H4>
      <S.ItemListWrapper>
        <ItemList itemList={pageNav} setIsMenuShow={setIsMenuShow} isMenuShow={isMenuShow} />
      </S.ItemListWrapper>
    </S.PageNavigationWrapper>
  );
};

export default PageNavigation;
