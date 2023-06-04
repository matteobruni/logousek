import React, { useMemo } from 'react'

import * as S from './styled'
import ProgressBar from './progress-bar'

type ScoreProps = { tasksCount: number; currentTask: number }

const Score: React.FC<ScoreProps> = ({ tasksCount, currentTask }) => {
  const taskElapsed = useMemo(() => currentTask - 1, [currentTask])

  return (
    <S.ScoreWrapper key="game-menu-profile">
      <S.ScoreText>
        {taskElapsed} / {tasksCount}
      </S.ScoreText>
      <ProgressBar taskElapsed={taskElapsed} tasksCount={tasksCount} />
    </S.ScoreWrapper>
  )
}

export default Score
