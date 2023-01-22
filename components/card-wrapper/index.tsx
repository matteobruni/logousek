import React from 'react'
import * as S from './styled'
import { pictureType } from '@helpers/sound-helper'
import ActivityCard from '@components/activities/activity-card'

type ActivityCardProps = {
  cards: pictureType[]
  selected?: string
  onChange: (selectedCardName: string) => void
}

const CardWrapper: React.FC<ActivityCardProps> = ({ cards, selected, onChange }) => {
  const getCards = () => {
    return cards.map((card) => {
      const PictureSvg = card.svg
      const isSelected = selected === card.name
      return (
        <ActivityCard
          key={`activity-card-${card.name}`}
          onClick={() => { onChange(card.name) }}
          selected={isSelected}
        >
          {isSelected && <i className={'material-icons'}>check</i>}
          <PictureSvg />
        </ActivityCard>
      )
    })
  }

  return <S.CardWrapper>{getCards()}</S.CardWrapper>
}

export default CardWrapper
