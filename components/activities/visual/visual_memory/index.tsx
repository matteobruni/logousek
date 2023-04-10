import React, {
  useState,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react'
import {
  TemplateWrapper,
  QuestionPart,
  ShowedPart,
  ActivityCardWrapper,
} from './styled'
import ActivityCard from '../../activity-card'
import { getRandomSvgsWithChangeConfig } from 'helpers/svg-helpers'
import Timer from '@components/timer/index'
import TrafficLights from '@components/traffic-lights'
import { shuffle } from 'helpers/array-helper'
import { ActivityProps } from '@components/pages/activity'
import { SvgListType } from 'helpers/svg-helpers'

const TIMER_COUNT_DOWN_TIME = 6000

export default forwardRef(function VisualMemoryActivity(
  { complexity, onHandleChanged }: ActivityProps,
  ref
) {
  const [generatedSvgs, setGeneratedSvgs] = useState<SvgListType[]>([])
  const [correctAnswers, setCorrectAnswers] = useState<SvgListType[]>([])
  const [selectedElements, setSelectedElements] = useState<string[]>([])
  useImperativeHandle(ref, () => ({
    getResult: () => {
      return (
        selectedElements?.length === correctAnswers.length &&
        selectedElements?.reduce(
          (res, currElement) =>
            correctAnswers.find((answer) => answer.name === currElement)
              ? res
              : false,
          true
        )
      )
    },
  }))

  useEffect(() => {
    if (correctAnswers.length === selectedElements?.length) {
      onHandleChanged()
    }
  }, [correctAnswers, onHandleChanged, selectedElements])

  useEffect(() => {
    const svgs = getRandomSvgsWithChangeConfig(
      complexity === '1' ? 4 : complexity === '2' ? 6 : 9
    )

    const correctAnswersName =
      complexity === '1' ? 1 : complexity === '2' ? 2 : 4

    const correctSvgsName = svgs.slice(0, correctAnswersName)
    setGeneratedSvgs(shuffle(svgs))
    setCorrectAnswers(correctSvgsName)
  }, [complexity])

  const [isQuesionpart, setIsQuesionpart] = useState(false)
  const onTimerIsDoneHandler = () => {
    setIsQuesionpart(true)
  }

  const select = (elementName: string) => {
    setSelectedElements((v) => {
      if (v.find((vItem) => vItem === elementName)) {
        return v.filter((selectedItem) => selectedItem !== elementName)
      } else {
        if (v.length < correctAnswers.length) {
          return [...v, elementName]
        } else {
          return v
        }
      }
    })
  }

  const questionPartQuestions = generatedSvgs.map((Element) => {
    const elementName = Element?.name
    return (
      <ActivityCard
        key={`element-card-${elementName}`}
        onClick={() => select(elementName)}
        selected={selectedElements?.includes(elementName)}
      >
        <Element.component />
      </ActivityCard>
    )
  })


  return (
    <TemplateWrapper isQuesionpart={isQuesionpart}>
      <ShowedPart onClick={() => setIsQuesionpart(true)}>
        <h1>
          <Timer
            countdownTime={TIMER_COUNT_DOWN_TIME}
            timerIsDone={onTimerIsDoneHandler}
          />
        </h1>
        <TrafficLights countdownTime={TIMER_COUNT_DOWN_TIME} />
        <h2>{correctAnswers.length > 1 ? "Zapamatuj si obrázky" : "Zapamatuj si obrázek"}</h2>
        <ActivityCardWrapper>
          {generatedSvgs
            .filter((Svg) =>
              correctAnswers.find(
                (correctAnswer) => correctAnswer.name === Svg.name
              )
            )
            .map((element) => {
              const Component = element.component
              return (
                <ActivityCard key={`element-card-${element.name}`}>
                  <Component />
                </ActivityCard>
              )
            })}
        </ActivityCardWrapper>
      </ShowedPart>
      <QuestionPart>{questionPartQuestions}</QuestionPart>
    </TemplateWrapper>
  )
})
