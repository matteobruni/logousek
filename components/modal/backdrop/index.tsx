import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { StyledBackdrop } from './styled'

interface Backdrop { children: any }

export interface BackdropInterfaceType {
  show: () => void
  close: () => void
}

export default forwardRef(function Backdrop ({ children }: Backdrop, ref) {
  const [show, setShow] = useState(false)

  useImperativeHandle(ref, () => ({
    show: showBackdrop,
    close: closeBackdrop
  }))

  const showBackdrop = () => {
    setShow(true)
  }

  const closeBackdrop = () => {
    setShow(false)
  }

  return <StyledBackdrop show={show}>{children}</StyledBackdrop>
})
