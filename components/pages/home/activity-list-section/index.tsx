import React from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import Header from "../header"
import TimeLine from '../../../time-line'
import SectionLayout from '../section-layout'
import * as S from "./styled"

const ActivityList: React.FC = () => {
  const { tHome } = useTranslateFunctions()

  return (
    <S.ActivityList id="activityList">
      <SectionLayout>
        <Header>{tHome("ActivityList.header")}</Header>
        <TimeLine />
      </SectionLayout>
    </S.ActivityList>
  )
}

export default ActivityList