import React from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import Header from "../header"
import TimeLine from '../../../time-line'
import * as S from "./styled"

const ActivityListSection: React.FC = () => {
  const { tHome } = useTranslateFunctions()

  return (
    <S.ActivityListSection id="activityList">
      <Header>{tHome("activityListSection.header")}</Header>
      <TimeLine />
    </S.ActivityListSection>
  )
}

export default ActivityListSection