import React from 'react'

import Cards from '@components/card'
import FadeIn from '@components/animations/fade-in'
import { getTranslation } from '@helpers/get-translation'

import Header from "../header"
import * as S from "./styled"

import { useTranslateFunctions } from 'hooks/useTranslateFunctions'


const CARDS_CONFIG = [
  {
    name: 'visibility',
    title: 'Zraková cvičení',
    image: "#"
  },
  {
    name: 'hear',
    title: 'Sluchová cvičení',
    image: "#"
  },
  {
    name: 'seriality',
    title: 'Cvičení na serialitu',
    image: "#"
  },
  {
    name: 'language',
    title: 'Procvičování jazyka',
    image: "#"
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
        <Header>{tHome("gameInfoSection.header")}</Header>
        <S.GameInfoSectionArticles>
          {cards}
        </S.GameInfoSectionArticles>
      </S.GameInfoWrapper>
    </S.GameInfoSection>
  )
}

export default GameInfoSection