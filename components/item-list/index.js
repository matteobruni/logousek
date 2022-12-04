import React from "react";
import { StyledList, StyledListItem } from "./styled";

export default function ItemList({ items, onItemClick }) {
    
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
}
