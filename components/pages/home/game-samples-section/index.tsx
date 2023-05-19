import React from 'react'
import Image from 'next/image'

import Pump from '@components/animations/pump'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

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
            <Image
              width="400"
              height="600"
              src="/images/phone.png"
              alt="logousek preview"
            />
          </S.GameSamplesImageWrapper>
        </Pump>
      </SectionLayout>
    </S.GameSamples>
  )
}

export default GameSamples