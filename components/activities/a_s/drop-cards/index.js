import React, { useContext } from "react";
import { CardWrapper, CardContainer } from "./styled";
import AsContext from "../../../../contexts/as-context";
import DropCard from "../drop-card";
function DropCards() {
  const asContext = useContext(AsContext);

  const _onItemDropHandle = (item, index) => {
    console.log("item", item, asContext)
    asContext?.setPlacedCards((previousValue) => {
      let updatedPlacedCards = [...previousValue]
      updatedPlacedCards[index] = item;
      return updatedPlacedCards;
      });

      asContext?.setAvaibleCards((previousValue) => previousValue.filter(avaibleCard => avaibleCard?.keyImage !== item?.keyImage))
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
