import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useDrop } from 'react-dnd'

import ActivityCard from '@components/activity-card'
import DndContext from '@contexts/dnd-context'
import { CardType } from '@hooks/use-get-cards'

import CustomDragLayer from '../../custom-drag-layer'

type InnerDropCardProps = {
  onDrop: (item: CardType) => void
  children: React.ReactNode
  customRadius?: string
}

const InnerDropCard: React.FC<InnerDropCardProps> = ({ onDrop, children, customRadius = "0px" }) => {
  const themeContext = useContext(ThemeContext)
  const dndContext = useContext(DndContext)
  const [, drop] = useDrop(() => ({
    accept: ['image'],
    drop: (item: CardType) => {
      onDrop(item)
    },
  }))
  return (
    <div ref={drop}>
      <ActivityCard
        color={themeContext?.colors?.lightGrey}
        customRadius={customRadius}
        customAspectRatio={dndContext?.aspectRatio}
        cursor="default"
      >
        <CustomDragLayer />
        {children}
      </ActivityCard>
    </div>
  )
}

export default InnerDropCard
