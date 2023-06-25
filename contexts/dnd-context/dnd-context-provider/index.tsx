import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'

import { getEmptyArray } from '@helpers/array-helper'
import { SVGS_HASH, CardType } from '@hooks/use-get-cards'

import DndContext from '..'

export type DndContextProviderInterface = {
  getCards: () => CardType[]
}

type DndContextProviderType = {
  children: any
  count: number
  onHandleChanged: (canBeChecked: boolean) => void
  aspectRatio?: string
  wasChanged: boolean
  usedCards: CardType[]
}

export type DndContextValueType = {
  avaibleCards: CardType[]
  setAvaibleCards: React.Dispatch<React.SetStateAction<CardType[]>>
  placedCards: CardType[]
  setPlacedCards: React.Dispatch<React.SetStateAction<CardType[]>>
  aspectRatio: string
}

export default forwardRef(function DndContextProvider(
  {
    children,
    count,
    onHandleChanged,
    wasChanged,
    aspectRatio = '1 / 1',
    usedCards,
  }: DndContextProviderType,
  ref
) {
  const [cards, setCards] = useState<CardType[]>(usedCards)
  const [placedCards, setPlacedCards] = useState<CardType[]>(
    getEmptyArray(count)
  )

  useEffect(() => {
    const isAllCardsPlaced = cards.length === 0

    if (isAllCardsPlaced && !wasChanged) {
      onHandleChanged(true)
    }
  }, [cards, onHandleChanged, wasChanged])

  useImperativeHandle(
    ref,
    (): DndContextProviderInterface => ({
      getCards: () => placedCards,

    }),
    [placedCards]
  )

  const dndContextValue: DndContextValueType = {
    avaibleCards: cards,
    setAvaibleCards: setCards,
    placedCards,
    setPlacedCards,
    aspectRatio,
  }

  return (
    <DndContext.Provider value={dndContextValue}>
      {children}
    </DndContext.Provider>
  )
})
