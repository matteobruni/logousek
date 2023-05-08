import React from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import Header from "../header"
import TimeLine from '../../../time-line'
import SectionLayout from '../section-layout'
import * as S from "./styled"

const ActivityListSection: React.FC = () => {
  const { tHome } = useTranslateFunctions()

  return (
    <S.ActivityListSection id="activityList">
      <SectionLayout>
        <Header>{tHome("activityListSection.header")}</Header>
        <TimeLine />
      </SectionLayout>
    </S.ActivityListSection>
  )
}

export default ActivityListSection