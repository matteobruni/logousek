import React from 'react'

import Cards from '@components/game-card'
import FadeIn from '@components/animations/fade-in'
import publicImages from '@constants/public-images'

import SectionLayout from '../section-layout'
import Header from "../header"
import * as S from "./styled"

import { useTranslateFunctions } from 'hooks/useTranslateFunctions'


const CARDS_CONFIG = [
  {
    name: 'visibility',
    title: 'Zraková cvičení',
    image: publicImages.activityIcons.differentiation
  },
  {
    name: 'hear',
    title: 'Sluchová cvičení',
    image: publicImages.activityIcons.differentiation
  },
  {
    name: 'seriality',
    title: 'Cvičení na serialitu',
    image: publicImages.activityIcons.seriality
  },
  {
    name: 'language',
    title: 'Procvičování jazyka',
    image: publicImages.activityIcons.oromotorics
  }
]

const getCards = () => {
  return CARDS_CONFIG.map(cardConf => (
    <FadeIn key={cardConf.name}>
      <Cards
        gameInfo={cardConf}
      />
    </FadeIn >)
  )
}

const GameInfoSection: React.FC = () => {
  const { tHome } = useTranslateFunctions()
  const cards = getCards();
  return (
    <S.GameInfoSection id="gameInfo">
      <S.GameInfoWrapper>
        <SectionLayout>
          <Header>{tHome("gameInfoSection.header")}</Header>
          <S.GameInfoSectionArticles>
            {cards}
          </S.GameInfoSectionArticles>
        </SectionLayout>
      </S.GameInfoWrapper>
    </S.GameInfoSection>
  )
}

export default GameInfoSection