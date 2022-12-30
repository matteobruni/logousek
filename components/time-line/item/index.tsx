import React from 'react'
import { getFormatedDate } from '../../../helpers/date-helper'
import FadeRight from '../../animations/fade-right'
import FadeLeft from '../../animations/fade-left'
import * as S from "./styled"

type TimeLineItemProps = { isEven: boolean, desc: string, date?: Date }

const TimeLineItem: React.FC<TimeLineItemProps> = ({ isEven, desc, date }) => {
  const UsedAnimationWrapper = isEven ? FadeLeft : FadeRight
  return (
    <UsedAnimationWrapper>
      <S.TimeLineItemWrapper isEven={isEven}>
        <S.Container>
          <S.Beak isEven={isEven} />
          <S.Content>
            {date && <S.Date>{getFormatedDate(date)}</S.Date>}
            <S.Desc>{desc}</S.Desc>
          </S.Content>
        </S.Container>
      </S.TimeLineItemWrapper>
    </UsedAnimationWrapper>
  )
}

export default TimeLineItem
