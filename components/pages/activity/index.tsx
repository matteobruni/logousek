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
import { useSession } from 'next-auth/react'
import { ThemeContext } from 'styled-components'

import PrivateRoute from '@components/auth/private-route'
import successAudioData from 'public/sounds/activity-feedback/success.mp3'
import wrongAudioData from 'public/sounds/activity-feedback/wrong.mp3'
import Timer from '@components/timer'

import ActivityHeader from '../../activity-header/activity-header'
import RouteWrapper from '../../route-wrapper'
import { getActivity } from '../../../helpers/get-activity'
import { games } from '../../../constants/activity-conf'
import RoundFooter from '../../round-footer'
import ModalContext from '../../../contexts/modal-context'
import GainedPoints from './gained-points'
import { GameType } from '../../../constants/activity-conf'
import axios from 'axios'
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
  checkResult: () => void
  currentTask: number
}

const Activity = () => {
  const [currentTask, setCurrentTask] = useState(1)
  const [correctTasks, setCorrectTasks] = useState(0)

  const [results, setResults] = useState({})
  const [wasChanged, setWasChanged] = useState(false)
  const [gameState, setGameState] = useState('playing')
  const [successAudio, setSuccessAudio] = useState<
    HTMLAudioElement | undefined
  >()
  const [wrongAudio, setWrongAudio] = useState<HTMLAudioElement | undefined>()

  const activityRef = useRef<ActivityInterface>(null)
  const router = useRouter()
  const activityName = router.query?.activityName as string
  const activityDifficulty = router.query?.difficulty as string
  const Activity = getActivity(activityName)
  const modalContext = useContext(ModalContext)
  const sessionData = useSession()
  const themeContext = useContext(ThemeContext)

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
    setSuccessAudio(new Audio(successAudioData))
    setWrongAudio(new Audio(wrongAudioData))
  }, [])

  const sendResult = async () => {
    try {
      const userData = sessionData.data?.user as {
        email: string
        name: string
        id: string
      }
      await axios.post('/api/activity/add-score', {
        userId: userData?.id,
        activityType: activityName,
        points:
          (GetPointsForTask() || DEFAULT_POINTS_FOR_TASK) * correctTasks,
        results,
        difficulty: activityDifficulty
      })
    } catch (error) { }
  }

  useEffect(() => {
    if (gameState === 'finish') {
      const redirectToGameMenu = () => {
        modalContext?.closeModal()
        router.push('/game-menu')
      }

      modalContext?.showModal({
        header: 'Konec Hry',
        onOkClick: redirectToGameMenu,
        onOkText: <S.DoneButtonContent><i className={'material-icons'}>check</i><span>Dokončit</span></S.DoneButtonContent>,
        closeDisabled: true,
        autoWidth: true,
      },
        {
          backgroundType: "party"
        }
      )
    }
  }, [gameState, modalContext, router, correctTasks, GetPointsForTask, sessionData, activityName, results])

  const playAudio = (audio: HTMLAudioElement | undefined) => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
      audio.play()
    }
  }

  const fail = () => {
    playAudio(wrongAudio)
    setCurrentTask((v) => ++v)
    setResults((v) => ({ ...v, [currentTask]: false }))
  }

  const success = () => {
    playAudio(successAudio)
    setCurrentTask((v) => ++v)
    setCorrectTasks((v) => ++v)
    setResults((v) => ({ ...v, [currentTask]: true }))
  }

  const onHandleChanged = () => {
    setWasChanged(true)
  }

  const _checkResult = () => {
    const isSuccess = activityRef?.current?.getResult()
    console.log("isSuccess", isSuccess)
    if (currentTask === TASKS_COUNT) {
      isSuccess && setCorrectTasks((prevCorrectTasks) => ++prevCorrectTasks)
      sendResult()
      setGameState('finish')
    } else {
      isSuccess ? success() : fail()
      setWasChanged(false)
    }
  }

  return (
    <RouteWrapper colorScheme={themeContext.colors.primary}>
      <PrivateRoute>
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
            {gameState !== 'finish' && (
              <Activity
                ref={activityRef}
                key={`activity_${currentTask}`}
                tasksElapsed={currentTask}
                onHandleChanged={onHandleChanged}
                checkResult={_checkResult}
                complexity={activityDifficulty || '1'}
                currentTask={currentTask}
              />
            )}
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
                    pointsForTask={
                      GetPointsForTask() || DEFAULT_POINTS_FOR_TASK
                    }
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
                title: <S.SendButton><i className="material-icons">done</i>Potvrdit</S.SendButton>,
                clickable: true,
                onClick: _checkResult,
                disabled: !wasChanged,
                background: wasChanged ? themeContext.colors.darkGreen : "#fff",
              },
            ]}
          />
        </footer>
      </PrivateRoute>
    </RouteWrapper>
  )
}

export default Activity

const TimerWrapper = styled.div`
  margin: 0px 0.5rem;
`
