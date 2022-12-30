import React, { useContext } from 'react'
import ActivityCard from '../../activity-card'
import { ThemeContext } from 'styled-components'
import AsContext from '../../../../contexts/as-context'
import { CustomDragLayer } from '../custom-drag-layer'

import { useDrop } from 'react-dnd'

function DropCard ({ onDrop, children }) {
  const themeContext = useContext(ThemeContext)
  const asContext = useContext(AsContext)
  const [collectedProps, drop] = useDrop(() => ({
    accept: ['image'],
    drop: (item) => {
      onDrop(item)
    }
  }))
  return (
    <div ref={drop}>
      <ActivityCard
        color={themeContext?.colors?.lightGrey}
        customRadius={'0px'}
        customAspectRatio={asContext?.aspectRatio}
      >

        <CustomDragLayer />
        {children}
      </ActivityCard>
    </div>
  )
}

export default DropCard
