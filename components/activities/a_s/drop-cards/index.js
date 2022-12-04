import React, { useContext } from "react";
import { CardWrapper, CardContainer } from "./styled";
import AsContext from "../../../../contexts/as-context";
import DropCard from "../drop-card";
function DropCards() {
  const asContext = useContext(AsContext);

  const _onItemDropHandle = (item, index) => {

    asContext?.setPlacedCards((v) => {
      let updatedPlacedCards = [...v]
      updatedPlacedCards[index] = item;
      return updatedPlacedCards;
      });

      // asContext?.setAvaibleCards((v) => {
        
      // });
  }

  return (
    <CardWrapper>
      <CardContainer>
        {asContext?.placedCards.map((card, index) => {
          return <DropCard key={`drag-card-${index}`} onDrop={(item) => _onItemDropHandle(item, index)}>{card?.img}</DropCard>;
        })}
      </CardContainer>
    </CardWrapper>
  );
}

export default DropCards;
