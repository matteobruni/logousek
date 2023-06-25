import React, { useContext } from 'react'

import DropCard from '@components/drop-card'
import DndContext from '@contexts/dnd-context'

import * as S from './styled'

const SyllablesDropCards: React.FC = () => {
  const asContext = useContext(DndContext)

  return (
    <S.CardList>
      <S.CardContainer>
        {asContext?.placedCards?.map((card, index) => (
          <DropCard key={`drop_card_${index}`} card={card} index={index} />
        ))}
      </S.CardContainer>
    </S.CardList>
  )
}

export default SyllablesDropCards
