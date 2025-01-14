import type { Identifier, XYCoord } from 'dnd-core'
import type { FC } from 'react'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ActivityCard from '@components/activity-card'

export const ItemTypes = {
    CARD: 'card',
}

export interface CardProps {
    id: any
    content: React.ReactNode
    index: number
    moveCard?: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
    index: number
    id: string
    type: string
}

const Card: FC<CardProps> = ({ id, content, index, moveCard }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop<
        DragItem,
        void,
        { handlerId: Identifier | null }
    >({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            // Get vertical middle
            const hoverMiddleX =
                (hoverBoundingRect.right - hoverBoundingRect.left) / 2

            // Determine mouse position
            const clientOffset = monitor.getClientOffset()

            // Get pixels to the top
            const hoverClientX = (clientOffset as XYCoord).x - hoverBoundingRect.left

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return
            }

            // Time to actually perform the action
            typeof moveCard === "function" && moveCard(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index }
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <div ref={ref} style={{ width: "10rem", opacity, alignSelf: "center" }} data-handler-id={handlerId}>
            <ActivityCard>
                {content}
            </ActivityCard>
        </div>
    )
}

export default Card