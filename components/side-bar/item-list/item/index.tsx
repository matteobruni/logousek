import React from "react";
import { P5 } from "@components/typography/paragraph";
import * as S from "./styled";

export type ItemType = {
  name: string;
  icon: string;
  title: string;
  onClick: () => void;
};

const Item: React.FC<ItemType> = ({ icon, title, onClick }) => {
  return (
    <S.ListItem>
      <S.ListItemLink onClick={onClick}>
        <S.ListItemIcon className={"material-icons"}>{icon}</S.ListItemIcon>
        <P5 margin="0 0 0 16px">{title}</P5>
      </S.ListItemLink>
    </S.ListItem>
  );
};

export default Item;
