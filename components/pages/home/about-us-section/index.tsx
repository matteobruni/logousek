import React from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import SectionLayout from '../section-layout'
import AboutUsList from './about-us-list'
import Header from "../header"
import * as S from "./styled"


const AboutAsSection: React.FC = () => {
  const { tHome } = useTranslateFunctions()
  return (
    <S.AboutAsSectionWrapper id="aboutAs">
      <S.AboutAsSectionContainer>
        <SectionLayout>
          <Header>{tHome("aboutAsSection.header")}</Header>
          <AboutUsList />
        </SectionLayout>
      </S.AboutAsSectionContainer>
    </S.AboutAsSectionWrapper>
  )
}

export default AboutAsSection