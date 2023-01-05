import React from "react";
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
        <span>{title}</span>
      </S.ListItemLink>
    </S.ListItem>
  );
};

export default Item;
