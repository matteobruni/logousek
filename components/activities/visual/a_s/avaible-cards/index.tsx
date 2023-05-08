import React, { useContext } from 'react'
import AsContext from '@contexts/as-context'
import DragCard from '../drag-card'
import { CardList } from './styled'

const AvaibleCards: React.FC = () => {
  const asContext = useContext(AsContext)
  return (
    <CardList>
      {asContext?.avaibleCards.map((card) => {
        return (
          <DragCard item={card} key={`drag-card-${card.keyImage}`}>
            {card.img}
          </DragCard>
        )
      })}
    </CardList>
  )
}

export default AvaibleCards
