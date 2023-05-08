import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Label from '@components/label'
import { usePlayerScore } from 'hooks/usePlayerData'
import RouteWrapper from '../../route-wrapper'
import activityConf from '../../../constants/activity-confs/activity-conf'
import Header from './header'
import RoundFooter from '../../round-footer'
import Card from '../../game-card'
import { ActivityType } from '../../../constants/activity-confs/activity-conf'
import * as S from './styled'

const GameMenu: React.FC = () => {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(1)
  const [activeActivity, setActiveActivity] = useState(activityConf[0])
  const [{ score }] = usePlayerScore()
  const sessionData = useSession()
  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    const DEFAULT_INDEX = 0;
    const { newActiveActivity, index } = activityConf.reduce(
      (
        result: { newActiveActivity?: ActivityType; index?: number },
        activity,
        index
      ) => {
        if (activity.name === router.query.activityType) {
          result = { newActiveActivity: activity, index }
        }
        return result
      },
      {}
    )

    setCurrentSlide(index || DEFAULT_INDEX)
    newActiveActivity && setActiveActivity(newActiveActivity || activityConf[DEFAULT_INDEX])
  }, [router.query.activityType])

  const selectNewActivityHandle = (name: string) => {
    router.push({
      query: { activityType: name },
    })
  }

  const getCards = (activity: ActivityType) => {
    const games = [...(activity.games || [])]
    return games.map((game, index) => (
      <Card key={`Card-${game.name}-${index}`} gameInfo={game} />
    ))
  }

  const getLabels = (activity: ActivityType) => {
    const notNullLabels = Array.isArray(activity.labels) ? activity.labels : []
    return notNullLabels.map((label, index) => (
      <Label key={`label-${index}-${label.name}`} color={label.color}>
        {label.description}
      </Label>
    ))
  }

  const activeActivitColor = themeContext?.colors[activeActivity.color]

  const activityTypes = activityConf.map((activity) => ({
    name: activity.name,
    icon: activity.icon,
    title: activity.title,
    shortTitle: activity.shortTitle,
    color: activity.color,
    clickable: !activity.disabled,
    disabled: activity.disabled,
  }))

  const getSlides = () => {
    return activityConf.map((activity) => (
      <S.Slide key={`slide_${activity.name}`}>
        <S.GameTypeDetail>
          <S.GamesTypeHeader>{activity.title}</S.GamesTypeHeader>
          <S.LabelWrapper>{getLabels(activity)}</S.LabelWrapper>
          <S.GamesTypeContent>{activity.description}</S.GamesTypeContent>
          <S.CitationParagraph>
            <cite>{activity.cite}</cite>
          </S.CitationParagraph>
        </S.GameTypeDetail>
        <S.GameList>{getCards(activity)}</S.GameList>
      </S.Slide>
    ))
  }

  return (
    <RouteWrapper
      colorScheme={activeActivitColor}
      title={`Logousek - ${activeActivity.title}`}
      type="private"
    >
      <S.MenuWrapper>
        <Header points={score} userName={sessionData?.data?.user?.name || ''} />
        <S.ContentWrapper currentSlide={currentSlide}>
          {getSlides()}
        </S.ContentWrapper>
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
