import React, {
    useState,
} from 'react'
import {
    TemplateWrapper,
    QuestionPart,
    ShowedPart,
} from './styled'
import ActivityCard from '@components/activities/activity-card'
import Timer from '@components/timer/index'
import TrafficLights from '@components/traffic-lights'
import { pictureType } from 'helpers/sound-helper'

const TIMER_COUNT_DOWN_TIME = 6000

type ActivitySliderProps = {
    questionPart?: React.ReactElement
    cardData: pictureType[]
    setSelectedElement: (value: string) => void
    selectedElements: string[]
    onTimerIsDoneHandler?: () => void
}

const ActivitySlider: React.FC<ActivitySliderProps> = ({ questionPart, cardData, setSelectedElement, selectedElements, onTimerIsDoneHandler }) => {
    const [isQuesionpart, setIsQuesionpart] = useState(false)
    const _onTimerIsDoneHandler = () => {
        if (typeof onTimerIsDoneHandler === "function") {
            onTimerIsDoneHandler()
        }
        setIsQuesionpart(true)
    }

    const questionPartQuestions = cardData.map((Element) => {
        const elementName = Element?.name
        return (
            <ActivityCard
                key={`element-card-${elementName}`}
                onClick={() => setSelectedElement(elementName)}
                selected={selectedElements?.includes(elementName)}
            >
                <Element.svg />
            </ActivityCard>
        )
    })

    return (
        <TemplateWrapper isQuesionpart={isQuesionpart}>
            <ShowedPart>
                <h1>
                    <Timer
                        countdownTime={TIMER_COUNT_DOWN_TIME}
                        timerIsDone={_onTimerIsDoneHandler}
                    />
                </h1>
                <TrafficLights countdownTime={TIMER_COUNT_DOWN_TIME} />
                {questionPart}
                <a onClick={() => setIsQuesionpart(true)}>Přeskočit</a>
            </ShowedPart>
            <QuestionPart>{questionPartQuestions}</QuestionPart>
        </TemplateWrapper >
    )
};

export default ActivitySlider