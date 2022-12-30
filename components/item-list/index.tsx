import React from "react";
import { StyledList, StyledListItem } from "./styled";

type ItemListProps = {
  items: {
    id: number;
    title: string;
    points: number;
  }[];
  onItemClick: (itemId: number) => void;
};

const ItemList: React.FC<ItemListProps> = ({ items, onItemClick }) => {
  const formedItems = Array.isArray(items)
    ? items.map((item) => (
        <StyledListItem
          key={`list-item-${item.id}`}
          onClick={() =>
            typeof onItemClick === "function" && onItemClick(item.id)
          }
        >
          <span>{item.id}</span>
          <span>{item.title}</span>
          <span>{item.points}</span>
        </StyledListItem>
      ))
    : [];
  return <StyledList>{formedItems}</StyledList>;
};

export default ItemList;
