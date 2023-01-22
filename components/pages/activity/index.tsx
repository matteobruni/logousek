import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ActivityHeader from '../../activity-header/activity-header'
import RouteWrapper from '../../route-wrapper'
import { getActivity } from '../../../helpers/get-activity'
import { setUserPoints } from '../../../helpers/local-storage-helper'
import { games } from '../../../constants/activity-conf'
import Timer from '@components/timer'
import RoundFooter from '../../round-footer'
import ModalContext from '../../../contexts/modal-context'
import GainedPoints from './gained-points'
import { GameType } from '../../../constants/activity-conf'
import successAudioData from "public/sounds/success.mp3"
import wrongAudioData from "public/sounds/wrong.mp3"
import * as S from './styled'

const DEFAULT_POINTS_FOR_TASK = 10
const TASKS_COUNT = 10

export type ActivityInterface = {
  getResult: () => boolean
  generateNext: () => void
}

export type ActivityProps = {
  complexity: string
  onHandleChanged: () => void
  tasksElapsed: number
}

const Activity = () => {
  const [currentTask, setCurrentTask] = useState(1)
  const [correctTasks, setCorrectTasks] = useState(0)
  const [wasChanged, setWasChanged] = useState(false)
  const [gameState, setGameState] = useState('playing')
  const [successAudio, setSuccessAudio] = useState<HTMLAudioElement | undefined>();
  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement | undefined>();

  const activityRef = useRef<ActivityInterface>(null)
  const router = useRouter()
  const activityName = router.query?.activityName as string
  const activityDifficulty = router.query?.difficulty as string
  const Activity = getActivity(activityName)
  const modalContext = useContext(ModalContext)

  const getActivityFromConf = useCallback(
    () =>
      Object.values(games).reduce(
        (result: GameType | undefined, gamesInType: GameType[]) => {
          const foundGame = gamesInType.find(
            (game) => game.name === activityName
          )
          if (foundGame) {
            result = foundGame
          }
          return result
        },
        undefined
      ),
    [activityName]
  )

  const GetPointsForTask = useCallback(() => {
    const difficultyList = getActivityFromConf()?.difficulty || []
    const actualDifficulty = difficultyList.find(
      (difficulty) => difficulty.id.toString() === activityDifficulty
    )
    return actualDifficulty?.points
  }, [activityDifficulty, getActivityFromConf])

  useEffect(() => {
    const showAlert = (event: { returnValue: string }) => {
      event.returnValue = 'string'
    }
    window.addEventListener('beforeunload', showAlert)
    return () => {
      window.removeEventListener('beforeunload', showAlert)
    }
  })

  useEffect(() => {
    setSuccessAudio(new Audio(successAudioData));
    setWrongAudio(new Audio(wrongAudioData));
  }, [])

  useEffect(() => {
    if (gameState === 'finish') {
      const redirectToGameMenu = () => {
        modalContext?.closeModal()
        router.push('/game-menu')
        setUserPoints(
          (GetPointsForTask() || DEFAULT_POINTS_FOR_TASK) * correctTasks
        )
      }

      modalContext?.showModal({
        header: 'Konec Hry',
        onOkClick: redirectToGameMenu,
        closeDisabled: true,
        autoWidth: true
      })
    }
  }, [gameState, modalContext, router, correctTasks, GetPointsForTask])

  const playAudio = (audio: HTMLAudioElement | undefined) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    }
  }

  const fail = () => {
    playAudio(wrongAudio)
    setCurrentTask((v) => ++v)
  }

  const success = () => {
    playAudio(successAudio)
    setCurrentTask((v) => ++v)
    setCorrectTasks((v) => ++v)
  }

  const onHandleChanged = () => {
    setWasChanged(true)
  }

  const _checkResult = () => {
    const isSuccess = activityRef?.current?.getResult()
    if (currentTask === TASKS_COUNT) {
      isSuccess && setCorrectTasks((prevCorrectTasks) => ++prevCorrectTasks)
      setGameState('finish')
    } else {
      isSuccess ? success() : fail()
      setWasChanged(false)
    }
  }

  return (
    <RouteWrapper colorScheme="#84E065">
      <Head>
        <title>Logousek - {getActivityFromConf()?.title}</title>
      </Head>
      <ActivityHeader
        tasksCount={TASKS_COUNT}
        currentTask={currentTask}
        title={getActivityFromConf()?.title || ''}
      />
      <S.ActivityWrapper>
        <S.ContentWrapper>
          {
            <Activity
              ref={activityRef}
              key={`activity_${currentTask}`}
              tasksElapsed={currentTask}
              onHandleChanged={onHandleChanged}
              complexity={activityDifficulty || '1'}
            />
          }
        </S.ContentWrapper>
      </S.ActivityWrapper>
      <footer>
        <RoundFooter
          activityTypes={[
            {
              name: '',
              clickable: false,
              title: (
                <GainedPoints
                  pointsForTask={GetPointsForTask() || DEFAULT_POINTS_FOR_TASK}
                  correctTasks={correctTasks}
                />
              ),
            },
            {
              name: 'timer',
              title: (
                <TimerWrapper>
                  <Timer />
                </TimerWrapper>
              ),
              clickable: false,
            },
            {
              name: 'sendButton',
              title: <S.SendButton>Potvrdit</S.SendButton>,
              clickable: true,
              onClick: _checkResult,
              disabled: !wasChanged,
            },
          ]}
        />
      </footer>
    </RouteWrapper>
  )
}

export default Activity

const TimerWrapper = styled.div`
  margin: 0px 0.5rem;
`
