import React from 'react'
import CustomDragLayer from './custom-drag-layer'
import { CardType } from '@contexts/seriality-context/seriality-context-provider'
import CardList from './card-list'

export interface Item {
    id: number
    text: string
}

type CardListType = {
    cards: CardType[],
    onHandleChange: (cards: CardType[]) => void
}

const SortableList: React.FC<CardListType> = (
    { cards, onHandleChange }
) => {


    return (
        <div>
            <CardList cards={cards} onHandleChange={onHandleChange} />
            <CustomDragLayer />
        </div>
    )
}

export default SortableList
