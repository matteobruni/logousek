import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react'
import AsContext from '..'
import useGetCards, { SVGS_HASH } from './use-get-cards'
import { CardType } from './use-get-cards'

export type AsContextProviderInterface = {
  checkResult: () => boolean
}


type AsContextProviderType = {
  children: any,
  count: number,
  onHandleChanged: () => void
}

export type AsContextValueType = {
  avaibleCards: CardType[],
  setAvaibleCards: (cards: CardType[]) => void,
  placedCards: CardType[],
  setPlacedCards: (cards: CardType[]) => void,
  aspectRatio: string
}

export default forwardRef(function AsContextProvider(
  { children, count, onHandleChanged }: AsContextProviderType,
  ref
) {
  const { cards, setCards } = useGetCards(count)
  const [aspectRatio] = useState<string>(
    count === 2 ? '1 / 2' : count === 4 ? '1 / 1' : '3 / 2'
  )
  const [placedCards, setPlacedCards] = useState<CardType[]>(
    new Array(count).fill(undefined)
  )

  useEffect(() => {
    const isAllCardsPlaced = cards.length === 0
    isAllCardsPlaced && onHandleChanged()
  }, [cards, onHandleChanged])

  useImperativeHandle(ref, (): AsContextProviderInterface => ({
    checkResult: () => {
      console.log("checking for result...", placedCards)
      const isCorrect = placedCards.reduce((result, currentPlacedCard, index) => {
        const expressedCardKey = SVGS_HASH[count][index]
        return currentPlacedCard?.keyImage !== expressedCardKey ? false : result
      }, true)
      return isCorrect
    }
  }),
    [count, placedCards])

  const asContextValue: AsContextValueType
    = {
    avaibleCards: cards,
    setAvaibleCards: setCards,
    placedCards,
    setPlacedCards,
    aspectRatio
  }

  return (
    <AsContext.Provider
      value={asContextValue}
    >
      {children}
    </AsContext.Provider>
  )
})
