import React from 'react'

import * as S from './styled'

type UserProps = { userName: string }

const User: React.FC<UserProps> = ({ userName }) => {

  return (
    <S.UserWrapper key="game-menu-user">
      <S.UserPhoto />
      <S.UserName type="primary" variant="T5">{userName}</S.UserName>
    </S.UserWrapper>
  )
}

export default User
