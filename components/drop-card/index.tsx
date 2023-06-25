import React from 'react'

import { CardType } from '@hooks/use-get-cards'
import useDrop from '@hooks/use-drop'

import InnerDropCard from '@components/drop-card/inener-drop-card'
import DragCard from '@components/drag-card'

type DropCardProps = {
  index: number,
  card: CardType
}

const RADIUS = '16px'

const DropCard: React.FC<DropCardProps> = ({ index, card }) => {
  const { onItemDropHandle } = useDrop()

  return (
    <InnerDropCard
      key={`drag-card-${index}`}
      onDrop={(item: CardType) => onItemDropHandle(item, index)}
      customRadius={RADIUS}
    >
      {card ? (
        <DragCard
          item={card}
          customRadius={RADIUS}
          key={`drag-card-${card.keyImage}`}
          reference={card.reference}
        >
          {card?.img}
        </DragCard>
      ) : null}
    </InnerDropCard>
  )


}

export default DropCard
