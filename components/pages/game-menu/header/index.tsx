import React from 'react'

import HeaderWrapper from '@components/header-wrapper/header-wrapper'

import Icons from './icons'
import User from './user'
import Cash from './cash'

type GameMenuHeaderType = { points?: string; userName: string }

const GameMenuHeader: React.FC<GameMenuHeaderType> = ({ points, userName }) => {

  return (
    <HeaderWrapper>
      <User userName={userName} />
      <Cash points={points} />
      <Icons />
    </HeaderWrapper>
  )
}

export default GameMenuHeader
