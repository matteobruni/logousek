import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import AsContext from "../../../../contexts/as-context";
import useGetCards, { SVGS_HASH } from "./use-get-cards";

export default forwardRef(function AsContextProvider(
  { children, count, onHandleChanged },
  ref
) {
  const [cards, setCards, resetCards] = useGetCards(count);
  const [aspectRatio] = useState(
    count === 2 ? "1 / 2" : count === 4 ? "1 / 1" : "3 / 2"
  );
  const [placedCards, setPlacedCards] = useState(
    new Array(count).fill(undefined)
  );

  useEffect(() => {
    const isAllCardsPlaced = cards.length === 0;
    isAllCardsPlaced && onHandleChanged();
  }, [cards, onHandleChanged]);

  useImperativeHandle(ref, () => ({
    checkResult: () => {
      const isCorrect = placedCards.reduce((result, currentPlacedCard, index) => {
        const expressedCardKey = SVGS_HASH[count][index];
        return currentPlacedCard?.keyImage !== expressedCardKey ? false : result;
      }, true);
      return isCorrect;
    },
  }));

  return (
    <AsContext.Provider
      value={{
        avaibleCards: cards,
        setAvaibleCards: setCards,
        placedCards,
        setPlacedCards,
        aspectRatio,
      }}
    >
      {children}
    </AsContext.Provider>
  );
});
