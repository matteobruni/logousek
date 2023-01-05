import React, { useState, forwardRef } from 'react'
import sound from '../../../../public/sounds/test-sound.mp3'
import SoundButton from '../../../sound-button'

export default forwardRef(function AudioDifferentiation() {
// { complexity, tasksElapsed, onResetChanged, onHandleChanged },
// ref
  const [] = useState()

  return (
    <div>
      <SoundButton fontSize="4rem" sound={sound} />
    </div>
  )
})
