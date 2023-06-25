import React, { useContext } from 'react'

import DndContext from '@contexts/dnd-context'
import DragCard from '@components/drag-card'

import { CardList } from './styled'

const AvaibleCards: React.FC = () => {
  const asContext = useContext(DndContext)
  return (
    <CardList>
      {asContext?.avaibleCards?.map((card) => {
        return (
          <DragCard item={card} key={`drag-card-${card.keyImage}`} reference={card.reference}>
            {card.img}
          </DragCard>
        )
      })}
    </CardList>
  )
}

export default AvaibleCards
