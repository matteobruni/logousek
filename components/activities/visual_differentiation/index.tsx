import React, { useState, useImperativeHandle, forwardRef } from 'react'
import CardList from './card-list'
import {
  getRandomSvgs,
  getRandomSvgsWithChangeConfig,
  getHideConfig,
} from '../../../helpers/svg-helpers'
import { shuffle } from '../../../helpers/array-helper'
import { ActivityProps } from '@components/pages/activity'
const START_COUNT_CARDS = 2

type AddictionObjType = {
  rotateDegrees?: number
  hideConfing?: { [key: string]: boolean }
}

export type AnswerType = {
  isCorrect: boolean
  Component: React.FC<{ changeConfig?: { [key: string]: boolean } }>
} & AddictionObjType

export default forwardRef(function VisualDifActivity(
  { complexity, tasksElapsed, onHandleChanged }: ActivityProps,
  ref
) {
  const [lasetSelectedWasCorrect, setLasetSelectedWasCorrect] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>()

  useImperativeHandle(ref, () => ({
    getResult: () => lasetSelectedWasCorrect,
    generateNext: () => {
      // setSelectedIndex();
      // setLasetSelectedWasCorrect(false);
      // setCards(getCardsArray());
    },
  }))

  const getCardsArray = (): AnswerType[] => {
    if (START_COUNT_CARDS > 1) {
      const wrongAnswersAdditionalObj: AddictionObjType = {}
      const correctAnswersAdditionalObj: AddictionObjType = {}
      let WrongCardComponent
      let CorrectCardComponent

      if (complexity === '1') {
        const [UsedCorectCard, UsedWrongCard] = getRandomSvgs(2)
        CorrectCardComponent = UsedCorectCard
        WrongCardComponent = UsedWrongCard
      } else if (complexity === '2') {
        const [UsedCard] = getRandomSvgsWithChangeConfig(1, [
          'car',
          'cloud',
          'ladyBug',
          'lego',
          'logousek',
          'lolipop',
          'bear',
        ])
        CorrectCardComponent = UsedCard.component
        WrongCardComponent = UsedCard.component
        const rotateDegreesCorrect = 0
        const rotateDegreesWrong = 180
        wrongAnswersAdditionalObj.rotateDegrees = rotateDegreesWrong
        correctAnswersAdditionalObj.rotateDegrees = rotateDegreesCorrect
      } else if (['3', '4'].includes(complexity)) {
        const usedPictures =
          complexity === '3'
            ? ['car', 'flower', 'cloud', 'ladyBug', 'sun', 'bear']
            : ['car', 'flower', 'ladyBug', 'bear']
        const [usedCard] = getRandomSvgsWithChangeConfig(1, usedPictures)

        CorrectCardComponent = usedCard.component
        WrongCardComponent = usedCard.component
        correctAnswersAdditionalObj.hideConfing = getHideConfig(
          complexity === '3'
            ? [...usedCard.hideSettings]
            : [...usedCard.hideDetailsSettings]
        )
        wrongAnswersAdditionalObj.hideConfing = {}
      }
      const wrongAnswers: AnswerType[] = new Array(
        START_COUNT_CARDS + Math.floor(tasksElapsed / 4)
      ).fill({
        isCorrect: false,
        ...wrongAnswersAdditionalObj,
        Component: WrongCardComponent,
      })

      const correctAnswers: AnswerType[] = new Array(1).fill({
        isCorrect: true,
        ...correctAnswersAdditionalObj,
        Component: CorrectCardComponent,
      })

      const mixedAnswers = [...wrongAnswers, ...correctAnswers]
      return shuffle(mixedAnswers)
    } else {
      return []
    }
  }
  const [cards] = useState(getCardsArray())

  const _success = () => {
    onHandleChanged()
    setLasetSelectedWasCorrect(true)
  }

  const _fail = () => {
    onHandleChanged()
    setLasetSelectedWasCorrect(false)
  }

  return (
    <main>
      <CardList
        cards={cards}
        chooseWrong={_fail}
        chooseCorrect={_success}
        complexity={complexity}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </main>
  )
})
