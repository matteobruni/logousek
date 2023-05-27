import React from 'react'
import * as S from './styled'

type HeaderProps = {
  children: string
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderText>{children}</S.HeaderText>
        <S.UnderlineBlock />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
