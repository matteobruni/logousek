import React, { useState, useContext } from 'react'
import { Collapse } from 'antd'

import { ScoreListType } from '..'
import Paggination from '../paggination'
import { games, GameType } from 'constants/activity-conf'
import { scoreDataItem } from '..'
import * as S from "./styled"
import colors from 'constants/colors'
import { ThemeContext } from 'styled-components'

const { Panel } = Collapse

type ScoreListItemType = {
    scoreList?: ScoreListType[]
}

const MAX_ITEMS_IN_LIST = 10

const ScoreListItem: React.FC<ScoreListItemType> = ({ scoreList }) => {
    const themeContext = useContext(ThemeContext)
    const [currentList, setCurrentList] = useState(0)

    const maxIndexes = Math.ceil((scoreList?.length || 0) / 10)

    const getActivityTitle = (activityType: string) => {
        const allGames = Object.values(games).reduce(
            (result: GameType[], currentGameArray: GameType[]) => {
                return [...result, ...currentGameArray]
            },
            []
        )
        return allGames.find((activity) => activity.name === activityType)?.title
    }

    const getScoreDataVisualization = (scoreData: scoreDataItem[]) => {
        console.log('scoreData', scoreData)
        const sortedScoreData = scoreData.sort(
            (prevScoreDataItem, currentScoreDataItem) =>
                prevScoreDataItem.order >= currentScoreDataItem.order ? 1 : -1
        )
        console.log("themeContext?.colors?.success", themeContext?.colors?.success)
        return sortedScoreData.map((scoreDataItem) => (
            <S.ScoreDataItem key={`score-data-item-${scoreDataItem.id}`}>
                <S.ScoreDataItemSpan>{scoreDataItem.order}</S.ScoreDataItemSpan>
                <S.ScoreDataItemSpan color={scoreDataItem.isCorrect ? themeContext?.colors?.success : themeContext?.colors?.alert}>{scoreDataItem.isCorrect ?
                    <i className={`material-icons`}>done</i> :
                    <i className={`material-icons`}>close</i>}</S.ScoreDataItemSpan>
            </S.ScoreDataItem>
        ))
    }

    return (
        <Collapse>
            {(scoreList || [])
                .slice(
                    currentList * MAX_ITEMS_IN_LIST,
                    (currentList + 1) * MAX_ITEMS_IN_LIST
                )
                .map((score) => (
                    <Panel header={score.createdAt} key={`score-list-item-${score.id}`}>
                        <p>Score: {score.points}</p>
                        <p>
                            Typ aktivity:
                            {getActivityTitle(score.activityType) || 'Bez názvu'} -{' '}
                            {score.activityType}
                        </p>
                        <p>Obtížnost: {score.difficulty}</p>
                        <S.ScoreDataVisualization>
                            {getScoreDataVisualization(score.scoreData)}
                        </S.ScoreDataVisualization>
                    </Panel>
                ))}

            <Paggination maxIndexes={maxIndexes} onLinkClick={setCurrentList} />
        </Collapse>
    )
}

export default ScoreListItem
