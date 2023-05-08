import React from 'react'

import * as S from "./styled"

type AboutAsSectionType = {
  children: React.ReactNode
}

const SectionLayout: React.FC<AboutAsSectionType> = ({ children }) => {
  return (
    <S.SectionLayoutWrapper>
      <S.SectionLayoutContainer>
        {children}
      </S.SectionLayoutContainer>
    </S.SectionLayoutWrapper>
  )
}

export default SectionLayout