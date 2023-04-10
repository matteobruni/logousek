import React from 'react'
import * as S from './styled'

type HeaderProps = {
  content?: any, children?: any
}

const Header: React.FC<HeaderProps> = ({ content, children }) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderText>{content || children}</S.HeaderText>
        <S.UnderlineBlock />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
