import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { StyledBackdrop } from './styled'
import Fireworks from '@components/particles/fireworks'
import Confetti from '@components/particles/confetti'
import { getRandomElementFromList } from '@helpers/array-helper'

interface Backdrop { children: any }

export type ShowBackdropParam = {
  backgroundType?: string
}

export interface BackdropInterfaceType {
  show: (backdropDetail?: ShowBackdropParam) => void
  close: () => void
}

export default forwardRef(function Backdrop({ children }: Backdrop, ref) {
  const [show, setShow] = useState(false)
  const [backdropDetail, setBackdropDetail] = useState<ShowBackdropParam>({})

  useImperativeHandle(ref, () => ({
    show: showBackdrop,
    close: closeBackdrop
  }))

  const showBackdrop = (showBackdropParam?: ShowBackdropParam) => {
    setShow(true)
    setBackdropDetail(showBackdropParam || {})
  }

  const closeBackdrop = () => {
    setShow(false)
    setBackdropDetail({})
  }


  const getBackground = () => {
    switch (backdropDetail?.backgroundType) {
      case "party":
        return getRandomElementFromList([<Confetti key={`confetti`} />, <Fireworks key={`fireworks`} />], 1)
      default:
        return
    }
  }

  return <StyledBackdrop show={show}>{children}{getBackground()}</StyledBackdrop>
})
