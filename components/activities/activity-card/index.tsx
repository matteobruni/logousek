import React from 'react'
import { ActivityCardWrapper } from './styled'

interface ActivityCardType {
  children?: any
  onClick?: () => void
  selected?: boolean
  rotate?: number
  color?: string
  customRadius?: string
  customAspectRatio?: string
}

const ActivityCard: React.FC<ActivityCardType> = ({
  children,
  onClick,
  selected,
  rotate,
  color,
  customRadius,
  customAspectRatio
}) => {
  return (
    <ActivityCardWrapper
      onClick={onClick}
      selected={selected}
      rotate={rotate}
      color={color}
      customRadius={customRadius}
      customAspectRatio={customAspectRatio}
    >
      {children}
    </ActivityCardWrapper>
  )
}

export default ActivityCard
