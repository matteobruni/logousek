import React from 'react'
import FadeRight from '../animations/fade-right'
import FadeLeft from '../animations/fade-left'
import * as S from "./styled"

type BubbleProps = { leftSide: boolean, desc: string, date?: string, fillWidth?: boolean }

const Bubble: React.FC<BubbleProps> = ({ leftSide, desc, date, fillWidth }) => {
  const UsedAnimationWrapper = leftSide ? FadeLeft : FadeRight
  return (
    <UsedAnimationWrapper>
      <S.TimeLineItemWrapper leftSide={leftSide}>
        <S.Container fillWidth={fillWidth}>
          <S.Beak leftSide={leftSide} />
          <S.Content >
            {date && <S.Date>{date}</S.Date>}
            <S.Desc>{desc}</S.Desc>
          </S.Content>
        </S.Container>
      </S.TimeLineItemWrapper>
    </UsedAnimationWrapper>
  )
}

export default Bubble
