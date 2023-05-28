import React, { useCallback } from 'react'
import { useSession } from 'next-auth/react'
import useGameMenu from '@hooks/useGameMenu'

import { usePlayerScore } from '@hooks/usePlayerData'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import activityConf from '@constants/activity-confs/activity-conf'
import RoundFooter from '@components/round-footer'
import RouteWrapper from '@components/route-wrapper'

import Header from './header'
import SlideList from './slide-list'
import * as S from './styled'


const activityTypes = activityConf.map((activity) => ({
  name: activity.name,
  icon: activity.icon,
  title: activity.title,
  shortTitle: activity.shortTitle,
  color: activity.color,
  clickable: !activity.disabled,
  disabled: activity.disabled,
}))

const GameMenu: React.FC = () => {
  const [{ score }] = usePlayerScore()
  const sessionData = useSession()
  const { currentSlide, activeActivity, selectNewActivityHandle, activeActivitColor } = useGameMenu()
  const { tGameMenu } = useTranslateFunctions()

  const getTitle = useCallback(() => {
    return tGameMenu("title", { test: activeActivity.title })
  }, [activeActivity.title, tGameMenu])

  return (
    <RouteWrapper
      colorScheme={activeActivitColor}
      title={getTitle()}
      type="private"
    >
      <S.MenuWrapper>
        <Header points={score} userName={sessionData?.data?.user?.name || ''} />
        <SlideList currentSlide={currentSlide} />
        <RoundFooter
          activityTypes={activityTypes}
          activeActivityName={activeActivity.name}
          selectNewActivity={selectNewActivityHandle}
        />
      </S.MenuWrapper>
    </RouteWrapper>
  )
}

export default GameMenu
