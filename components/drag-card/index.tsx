import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useDrag } from 'react-dnd'

import DndContext from '@contexts/dnd-context'
import { CardType } from '@hooks/use-get-cards'

import ActivityCard from '@components/activity-card'

interface DragCardProps { content?: any, children?: any, customRadius?: string, item?: CardType, reference?: React.ReactNode }

const DragCard: React.FC<DragCardProps> = ({ content, children, customRadius, item, reference }) => {
  const themeContext = useContext(ThemeContext)
  const dndContext = useContext(DndContext)
  const [collected, drag] = useDrag(() => ({
    type: 'image',
    item,
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging()
      }
    }
  }))
  return collected.isDragging
    ? (
      <ActivityCard
        customAspectRatio={dndContext?.aspectRatio}
        color={themeContext?.colors?.lightGrey}
      />
    )
    : (
      <div ref={drag}>
        <ActivityCard
          customAspectRatio={dndContext?.aspectRatio}
          customRadius={customRadius}
          reference={reference}
        >
          {content || children}
        </ActivityCard>
      </div>
    )
}

export default DragCard
