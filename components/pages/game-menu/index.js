import React, { useState, useEffect, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Head from 'next/head'
import { hideScrollBarCss } from '../../../styles/scrollbar-styles'
import RouteWrapper from '../../../helpers/route-wrapper'
import activityConf from '../../../constants/activity-conf'
import colors from '../../../constants/colors'
import GameMenuHeader from '../../game-menu-header/game-menu-header'
import RoundFooter from '../../round-footer'
import GameMenuCard from '../../game-menu-card'
import Label from '../../label/label'
import {
  getGuestData,
  setToLocalSotrage
} from '../../../helpers/local-storage-helper'
import Blob from '../../blob/blob'
import TimeLineItem from '../../time-line-item/time-line-item'
import Button from '../../button'
import ButtonRow from '../../button-row/button-row'
import styles from './styles.module.css'

const GameMenu = () => {
  const [activeActivity, setActiveActivity] = useState(activityConf[0])
  const [userData, setUserData] = useState({})
  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    setUserData(getGuestData())
  }, [])
  const _changeActiveActivity = (name) =>
    setActiveActivity(activityConf.find((activity) => activity.name === name))
  const gameMenuCards = [...(activeActivity.games || [])].map((game, index) => (
    <GameMenuCard key={`GameMenuCard-${game.name}-${index}`} gameInfo={game} />
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
  return (
    <RouteWrapper colorScheme={activeActivitColor}>
      <Head>
        <title>{`Logousek - ${activeActivity.title}`}</title>
      </Head>
      <div className={styles.menuWrapper}>
        {userData.isNewUser === 'true' && (
          <BlobWrapper>
            <Blob color={activeActivitColor} />
            <RightSideWrapper>
              <TimeLineItem
                isEven={false}
                desc={'Ahoj, já jsem kachna ta a ta a budu vás provázet.'}
              />
              <ButtonRow>
                <Button
                  color={colors.green}
                  title={'Spustit průvodce'}
                  onClick={() => {}}
                />
                <Button
                  color={colors.yellow}
                  title={'Přeskočit průvodce'}
                  onClick={skipTutorial}
                />
              </ButtonRow>
            </RightSideWrapper>
          </BlobWrapper>
        )}
        <GameMenuHeader
          points={userData?.points}
          userName={userData?.userName}
        />
        <main className={styles.contentWrapper}>
          <section className={styles.gameTypeDetail}>
            <h1 className={styles.gamesTypeHeader}>{activeActivity.title}</h1>
            
            <div className={styles.labelWrapper}>{labels}</div>
            <p className={styles.gamesTypeContent}>
              {activeActivity.description}
            </p>
            <p className={styles.citationParagraph}>
            <cite>Bednářová, 2015</cite>
            </p>
          </section>
          <section className={styles.gameList}>{[...gameMenuCards]}</section>
        </main>
        <RoundFooter
          activityTypes={activityConf}
          activeActivityName={activeActivity.name}
          selectNewActivity={_changeActiveActivity}
        />
      </div>
    </RouteWrapper>
  )
}

export default GameMenu

const BlobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  ${hideScrollBarCss}
  & > div > article > div {
    width: auto;
    flex: 1;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
  }
`

const RightSideWrapper = styled.div`
  padding-bottom: 80px;
`
