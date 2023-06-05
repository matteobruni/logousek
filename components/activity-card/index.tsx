import React from 'react'
import * as S from './styled'

export type ActivityCardType = {
  children?: React.ReactNode
  onClick?: () => void
  selected?: boolean
  rotate?: number
  color?: string
  customRadius?: string
  customAspectRatio?: string
  fill?: boolean
}

const ActivityCard: React.FC<ActivityCardType> = ({
  children,
  onClick,
  selected,
  rotate,
  color,
  customRadius = '1rem',
  customAspectRatio = '1 / 1',
  fill
}) => {
  return (
    <S.ActivityCardList
      onClick={onClick}
      selected={selected}
      rotate={rotate}
      color={color}
      customRadius={customRadius}
      customAspectRatio={customAspectRatio}
      fill={fill}
    >
      {selected && <i className={'material-icons'}>check</i>}
      {children}
    </S.ActivityCardList>
  )
}

export default ActivityCard
