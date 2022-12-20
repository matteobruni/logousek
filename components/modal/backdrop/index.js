import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { StyledBackdrop } from './styled'

export default forwardRef(function Backdrop ({ children }, ref) {
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
