import React from 'react'

import HeaderWrapper from '@components/header-wrapper/header-wrapper'

import Icons from './icons'
import User from './user'
import Cash from './cash'

const GameMenuHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <User />
      <Cash />
      <Icons />
    </HeaderWrapper>
  )
}

export default GameMenuHeader
