import React from 'react'
import Image from 'next/image'

import Pump from '@components/animations/pump'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import publicImages from '@constants/public-images'

import SectionLayout from '../section-layout'
import Header from "../header"
import * as S from "./styled"


const GameSamples: React.FC = () => {
  const { tHome } = useTranslateFunctions()

  return (
    <S.GameSamples>
      <SectionLayout>
        <Header>{tHome("GameSamples.header")}</Header>
        <Pump>
          <S.GameSamplesImageWrapper>
            <S.GameSamplesImage src={publicImages.gameSample["01"]} />
          </S.GameSamplesImageWrapper>
        </Pump>
      </SectionLayout>
    </S.GameSamples >
  )
}

export default GameSamples