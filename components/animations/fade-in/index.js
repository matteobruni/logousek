import React from 'react'
import Animate from '../animate'

function FadeIn ({ children }) {
  return (
    <Animate
      fromStyles={{ opacity: 0, translate: '0 5rem', scale: 1 }}
      toStyles={{ opacity: 1, translate: 'none', scale: 1 }}
    >
      {children}
    </Animate>
  )
}

export default FadeIn
