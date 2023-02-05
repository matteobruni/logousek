import React, {
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react'
import SerialityContext from '..'
import useGetCards from './use-get-cards'
import { CardType } from './use-get-cards'

export type SerialityContextProviderInterface = {
  checkResult: () => boolean
}


type SerialityContextProviderType = {
  children: any,
  count: number,
  onHandleChanged: () => void
}

export type SerialityContextValueType = {
  cards: CardType[]
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>
}

export default forwardRef(function AsContextProvider(
  { children, count, onHandleChanged }: SerialityContextProviderType,
  ref
) {
  const { cards, setCards } = useGetCards(count)

  useEffect(() => {
    const isAllCardsPlaced = cards.length === 0
    isAllCardsPlaced && onHandleChanged()
  }, [cards, onHandleChanged])

  useImperativeHandle(ref, (): SerialityContextProviderInterface => ({
    checkResult: () => {
      //TODO: check result
      return true;
    }
  }))
  console.log("cards", cards)
  const serialityContextValue: SerialityContextValueType
    = {
    cards,
    setCards
  }

  return (
    <SerialityContext.Provider
      value={serialityContextValue}
    >
      {children}
    </SerialityContext.Provider>
  )
})
