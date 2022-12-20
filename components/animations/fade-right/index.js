import React from 'react'
import Animate from '../animate'

function FadeRight ({ children }) {
  return (
    <Animate
      fromStyles={{ opacity: 0, translate: '-5rem 0', scale: 1 }}
      toStyles={{ opacity: 1, translate: 'none', scale: 1 }}
    >
      {children}
    </Animate>
  )
}

export default FadeRight
