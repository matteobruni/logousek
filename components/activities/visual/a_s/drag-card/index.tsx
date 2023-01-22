import { useContext } from 'react'
import { useDrag } from 'react-dnd'
import ActivityCard from '../../../activity-card'
import { ThemeContext } from 'styled-components'
import AsContext from '@contexts/as-context'
import { CardType } from '@contexts/as-context/as-context-provider/use-get-cards'

interface DragCardProps { content?: any, children?: any, customRadius?: string, item?: CardType }

const DragCard: React.FC<DragCardProps> = ({ content, children, customRadius, item }) => {
  const themeContext = useContext(ThemeContext)
  const asContext = useContext(AsContext)
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
        customAspectRatio={asContext?.aspectRatio}
        color={themeContext?.colors?.lightGrey}
      />
    )
    : (
      <div ref={drag}>
        <ActivityCard
          customAspectRatio={asContext?.aspectRatio}
          customRadius={customRadius}
        >
          {content || children}
        </ActivityCard>
      </div>
    )
}

export default DragCard
