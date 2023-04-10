import React from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import AboutUsList from './about-us-list'
import Header from "../header"
import * as S from "./styled"


const AboutAsSection: React.FC = () => {
  const { tHome } = useTranslateFunctions()
  return (
    <S.AboutAsSectionWrapper id="aboutAs">
      <S.AboutAsSectionContainer>
        <Header>{tHome("aboutAsSection.header")}</Header>
        <AboutUsList />
      </S.AboutAsSectionContainer>
    </S.AboutAsSectionWrapper>
  )
}

export default AboutAsSection