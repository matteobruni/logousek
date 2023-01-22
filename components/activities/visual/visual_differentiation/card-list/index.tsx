import React from 'react'
import { CardWrapper } from './styled'
import ActivityCard from '../../../activity-card'
import { AnswerType } from '..'

type CardListType = {
  cards: AnswerType[],
  chooseWrong: () => void,
  chooseCorrect: () => void,
  complexity: string,
  selectedIndex?: number,
  setSelectedIndex: (index?: number) => void
}

const CardList: React.FC<CardListType> = ({
  cards,
  chooseWrong,
  chooseCorrect,
  complexity,
  selectedIndex,
  setSelectedIndex
}) => {
  const _chooseItem = (index: number, callback: () => void) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index)
      callback()
    } else {
      setSelectedIndex(undefined)
    }
  }

  const _getCardsForFirstLevel = (correctAnswer: { Component: any; isCorrect: any }, index: number) => {
    const isSelected = selectedIndex === index
    const Component = correctAnswer.Component
    return (
      <ActivityCard
        key={`answer-${index}`}
        onClick={() => correctAnswer.isCorrect ? _chooseItem(index, chooseCorrect) : _chooseItem(index, chooseWrong)}
        selected={isSelected}
      >
        {isSelected && <i className={'material-icons'}>check</i>}
        {<Component />}
      </ActivityCard>
    )
  }

  const _getCardsForSecLevel = (correctAnswer: AnswerType, index: number) => {
    const isSelected = selectedIndex === index
    const Component = correctAnswer.Component

    return (
      <ActivityCard
        key={`answer-${index}`}
        onClick={() => correctAnswer.isCorrect ? _chooseItem(index, chooseCorrect) : _chooseItem(index, chooseWrong)}
        selected={isSelected}
        rotate={correctAnswer.rotateDegrees}
      >
        {isSelected && <i className={'material-icons'}>check</i>}
        <Component />
      </ActivityCard>
    )
  }

  const _getCardsFoThirdLevel = (correctAnswer: AnswerType, index: number) => {
    const isSelected = selectedIndex === index
    const Component = correctAnswer.Component
    return (
      <ActivityCard
        key={`answer-${index}`}
        onClick={() => correctAnswer.isCorrect ? _chooseItem(index, chooseCorrect) : _chooseItem(index, chooseWrong)}
        selected={isSelected}
        rotate={correctAnswer.rotateDegrees}
      >
        {isSelected && <i className={'material-icons'}>check</i>}
        <Component changeConfig={correctAnswer.hideConfing} />
      </ActivityCard>
    )
  }

  const _getCards = () => {
    return cards.map((correctAnswer: AnswerType, index: number) => {
      switch (complexity) {
        case '1':
          return _getCardsForFirstLevel(correctAnswer, index)
        case '2':
          return _getCardsForSecLevel(correctAnswer, index)
        case '3':
        default:
          return _getCardsFoThirdLevel(correctAnswer, index)
      }
    })
  }
  return <CardWrapper>{_getCards()}</CardWrapper>
}


export default CardList