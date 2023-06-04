import React from 'react'

import { formatTime } from '@helpers/time-helper'
import { useTimer } from '@hooks/useTime'
import { P5 } from '@components/typography/paragraph'

type TimerType = { countdownTime?: number, timerIsDone?: () => void }

const Timer: React.FC<TimerType> = ({ countdownTime, timerIsDone }) => {
  const remainingTime = useTimer(countdownTime, timerIsDone)

  return <P5>{formatTime(remainingTime)}</P5>
}

export default Timer
