import React from 'react'
import { ActivityCardWrapper } from './styled'

type ActivityCardProps = {
  children: React.ReactElement,
  onClick: () => void,
  selected: boolean,
  rotate: string,
  color: string,
  customRadius: string,
  customAspectRatio: string
}

const ActivityCard: React.FC<ActivityCardProps> = ({
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
