import React, { useContext } from "react";
import AsContext from "../../../../contexts/as-context";
import DragCard from "../drag-card";
import { CardWrapper } from "./styled";

function AvaibleCards() {
  const asContext = useContext(AsContext);
  return (
    <CardWrapper>
      {asContext?.avaibleCards.map((card) => {
        console.log("card", card)
        return <DragCard item={card} key={`drag-card-${card.keyImage}`}>{card.img}</DragCard>;
      })}
    </CardWrapper>
  );
}

export default AvaibleCards;
