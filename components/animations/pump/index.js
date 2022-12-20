import React from 'react'
import Animate from '../animate'

function Pump ({ children }) {
  return (
    <Animate
      fromStyles={{ opacity: 0, translate: 'none', scale: 0.5 }}
      toStyles={{ opacity: 1, translate: 'none', scale: 1 }}
    >
      {children}
    </Animate>
  )
}

export default Pump
