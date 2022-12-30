import React from 'react'
import { HeaderWrapper, UnderlineBlock, HeaderContainer, HeaderText } from './styled'

type HeaderProps = {
  content?: any, children?: any
}

const Header: React.FC<HeaderProps> = ({ content, children }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderText>{content || children}</HeaderText>
        <UnderlineBlock />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
