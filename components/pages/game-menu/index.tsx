import React, { useState, useEffect, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Head from 'next/head'
import RouteWrapper from '../../route-wrapper'
import activityConf from '../../../constants/activity-conf'
import Header from "./components/header"
import RoundFooter from '../../round-footer'
import Card from '../../card'
import Label from '@components/label'
import {
  getGuestData,
  setToLocalSotrage
} from '../../../helpers/local-storage-helper'
import Blob from '../../blob/blob'
import TimeLineItem from '../../time-line/item'
import Button from '../../button'
import ButtonRow from '../../button-row/button-row'
import { UserData } from '@helpers/local-storage-helper'
import * as S from "./styled"

type GameMenuType = {}

const GameMenu: React.FC<GameMenuType> = () => {
  const [activeActivity, setActiveActivity] = useState(activityConf[0])
  const [userData, setUserData] = useState<UserData | undefined>()
  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    setUserData(getGuestData())
  }, [])
  const _changeActiveActivity = (name: string) => {
    const newActiveActivity = activityConf.find((activity) => activity.name === name)
    newActiveActivity && setActiveActivity(newActiveActivity)
  }
  const Cards = [...(activeActivity.games || [])].map((game, index) => (
    <Card key={`Card-${game.name}-${index}`} gameInfo={game} />
  ))
  const labels = (
    Array.isArray(activeActivity.labels) ? activeActivity.labels : []
  ).map((label, index) => (
    <Label key={`label-${index}-${label.name}`} color={label.color}>
      {label.description}
    </Label>
  ))

  const skipTutorial = () => {
    setToLocalSotrage('isNewUser', false)
    setUserData(getGuestData())
  }
  const activeActivitColor = themeContext?.colors[activeActivity.color]

  const activityTypes = activityConf.map(activity => ({
    name: activity.name,
    clickable: !activity.disabled,
    title: activity.title,
    disabled: activity.disabled,
    color: activity.color,
    icon: activity.icon,
    shortTitle: activity.shortTitle
  }))
  return (
    <RouteWrapper colorScheme={activeActivitColor}>
      <Head>
        <title>{`Logousek - ${activeActivity.title}`}</title>
      </Head>
      <S.MenuWrapper>
        {userData?.isNewUser === 'true' && (
          <S.BlobWrapper>
            <Blob color={activeActivitColor} />
            <S.RightSideWrapper>
              <TimeLineItem
                isEven={false}
                desc={'Ahoj, já jsem kachna ta a ta a budu vás provázet.'}
              />
              <ButtonRow>
                <Button
                  color={themeContext.primary}
                  title={'Spustit průvodce'}
                  onClick={() => { }}
                />
                <Button
                  color={themeContext.primary}
                  title={'Přeskočit průvodce'}
                  onClick={skipTutorial}
                />
              </ButtonRow>
            </S.RightSideWrapper>
          </S.BlobWrapper>
        )}
        <Header
          points={typeof userData?.points === "number" ? Number(userData?.points) : 0}
          userName={userData?.userName || ""}
        />
        <S.ContentWrapper>
          <S.GameTypeDetail>
            <S.GamesTypeHeader>{activeActivity.title}</S.GamesTypeHeader>
            <S.LabelWrapper>{labels}</S.LabelWrapper>
            <S.GamesTypeContent>
              {activeActivity.description}
            </S.GamesTypeContent>
            <S.CitationParagraph>
              <cite>Bednářová, 2015</cite>
            </S.CitationParagraph>
          </S.GameTypeDetail>
          <S.GameList>{[...Cards]}</S.GameList>
        </S.ContentWrapper >
        <RoundFooter
          activityTypes={activityTypes}
          activeActivityName={activeActivity.name}
          selectNewActivity={_changeActiveActivity}
        />
      </S.MenuWrapper>
    </RouteWrapper>
  )
}

export default GameMenu