import React, { useContext } from 'react'
import { CardList, CardContainer } from './styled'
import AsContext from '@contexts/as-context'
import DropCard from '../drop-card'
import DragCard from '../drag-card'

function DropCards() {
  const asContext = useContext(AsContext)

  const _onItemDropHandle = (item, index) => {
    asContext?.setPlacedCards((previousPlacedValue) => {
      const indexOfPreviousPlaceOfItem = previousPlacedValue.reduce(
        (result, placedItem, index) => {
          if (placedItem?.keyImage === item?.keyImage) {
            return index
          } else {
            return result
          }
        },
        undefined
      )
      const updatedPlacedCards = [...previousPlacedValue]
      const currentValue = updatedPlacedCards[index]
      updatedPlacedCards[index] = item
      updatedPlacedCards[indexOfPreviousPlaceOfItem] = currentValue

      asContext?.setAvaibleCards((previousAvaibleValue) => {
        let filtredValue = previousAvaibleValue.filter(
          (avaibleCard) => avaibleCard?.keyImage !== item?.keyImage
        )
        if (currentValue && !indexOfPreviousPlaceOfItem) {
          filtredValue = [...filtredValue, currentValue]
        }
        return filtredValue
      })
      return updatedPlacedCards
    })
  }
  return (
    <CardList>
      <CardContainer>
        {asContext?.placedCards.map((card, index) => {
          return (
            <DropCard
              key={`drag-card-${index}`}
              onDrop={(item) => _onItemDropHandle(item, index)}
            >
              {card && (
                <DragCard
                  item={card}
                  customRadius={'0px'}
                  key={`drag-card-${card.keyImage}`}
                >
                  {card?.img}
                </DragCard>
              )}
            </DropCard>
          )
        })}
      </CardContainer>
    </CardList>
  )
}

export default DropCards
