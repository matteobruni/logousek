import { useEffect, useState } from 'react'
import { formatTime } from '../../helpers/time-helper'

type TimerType = { countdownTime?: number, timerIsDone?: () => void }

const Timer: React.FC<TimerType> = ({ countdownTime, timerIsDone = () => {} }) => {
  const startTime = new Date().getTime()
  const [elapsedMilis, setElapsedMilis] = useState(
    startTime - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedMilis(elapsedMilis + (new Date().getTime() - startTime))
    }, 1000)

    if (countdownTime && elapsedMilis >= countdownTime) {
      clearInterval(interval)
      timerIsDone()
    }

    return () => clearInterval(interval)
  }, [countdownTime, elapsedMilis, startTime, timerIsDone])

  return <p>{formatTime(countdownTime ? countdownTime - elapsedMilis : elapsedMilis)}</p>
}

export default Timer
