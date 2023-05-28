import React from 'react'

import { TextWrap } from '@components/typography/text/styled'

import * as S from './styled'

type CashProps = { points?: string }

const Cash: React.FC<CashProps> = ({ points }) => {

  return (
    <S.CashWrapper key="game-menu-coins">
      <S.CashContainer>
        <S.Icon className={'material-icons'}>payments</S.Icon>
        <TextWrap type="primary" variant="T5">{points || 0}</TextWrap>
      </S.CashContainer>
    </S.CashWrapper>
  )
}

export default Cash
