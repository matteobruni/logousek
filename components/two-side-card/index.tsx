import React, { useState } from 'react'

import ActivityCard from 'components/activity-card'
import { P6 } from 'components/typography/paragraph'

import * as S from './styled'

type GameCardProps = {
  name: string
  title: string
  image: string
  description?: string
  onMainSideClick: () => void
}

const TwoSideCard: React.FC<GameCardProps> = ({
  name,
  title,
  image,
  description,
  onMainSideClick
}) => {
  const [isDiffSiteShown, setIsDiffSiteShown] = useState(false)

  const showSecondSide = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    if (!isDiffSiteShown) {
      setIsDiffSiteShown(true)
    }
  }

  const showMainSide = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    setIsDiffSiteShown(false)
  }

  return (
    <S.CardList>
      <S.InnedCard isDiffSiteShown={isDiffSiteShown}>
        <S.MainSide onClick={onMainSideClick}>
          <ActivityCard fill={true}>
            <S.MainSideContainer>
              <S.InformIcon onClick={showSecondSide}>
                <i className={`material-icons`}>inform</i>
              </S.InformIcon>
              <S.Image src={image} alt={`${name}-image`} />
              <S.Description>{title}</S.Description>
            </S.MainSideContainer>
          </ActivityCard>
        </S.MainSide>
        <S.DescriptionSide>
          <ActivityCard fill={true}>
            <S.Navbar>
              <S.InformIcon onClick={showMainSide}>
                <i className={`material-icons`}>reply</i>
              </S.InformIcon>
            </S.Navbar>
            <S.SecondSideContentWrap>
              <S.Description>{title}</S.Description>
              <P6 margin="0" align="left">{description}</P6>
            </S.SecondSideContentWrap>
          </ActivityCard>
        </S.DescriptionSide>
      </S.InnedCard>
    </S.CardList>
  )
}

export default TwoSideCard
