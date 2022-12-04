import React, { useState } from "react";
import Bear from "../../../svg/templates/bear";
import AsContext from "../../../../contexts/as-context";
import useGetCards from "./use-get-cards";

function AsContextProvider({ children, count }) {
  const [cards, setCards, resetCards] = useGetCards(count);
  const [placedCards, setPlacedCards] = useState(
    new Array(count).fill(undefined)
  );

  return (
    <AsContext.Provider
      value={{
        avaibleCards: cards,
        setAvaibleCards: setCards,
        placedCards,
        setPlacedCards,
      }}
    >
      {children}
    </AsContext.Provider>
  );
}

export default AsContextProvider;
