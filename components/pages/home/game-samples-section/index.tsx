import React from 'react'
import Image from 'next/image'

import Pump from '@components/animations/pump'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import SectionLayout from '../section-layout'
import Header from "../header"
import * as S from "./styled"


const GameSamplesSection: React.FC = () => {
  const { tHome } = useTranslateFunctions()

  return (
    <S.GameSamplesSection>
      <SectionLayout>
        <Header>{tHome("gameSamplesSection.header")}</Header>
        <Pump>
          <S.GameSamplesSectionImageWrapper>
            <Image
              width="400"
              height="600"
              src="/images/phone.png"
              alt="logousek preview"
            />
          </S.GameSamplesSectionImageWrapper>
        </Pump>
      </SectionLayout>
    </S.GameSamplesSection>
  )
}

export default GameSamplesSection