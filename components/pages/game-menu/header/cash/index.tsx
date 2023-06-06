import React from 'react'

import { usePlayerScore } from '@hooks/usePlayerData'
import { TextWrap } from '@components/typography/text/styled'

import * as S from './styled'


const Cash: React.FC = () => {
  const [{ score }] = usePlayerScore()
  return (
    <S.CashWrapper key="game-menu-coins">
      <S.CashContainer>
        <S.Icon className={'material-icons'}>payments</S.Icon>
        <TextWrap type="primary" variant="T5">{score || 0}</TextWrap>
      </S.CashContainer>
    </S.CashWrapper>
  )
}

export default Cash
