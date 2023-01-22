import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useEffect,
} from 'react'
import { ActivityProps } from 'components/pages/activity'
import ActivitySlider from 'components/activity-slider'
import { getAudioConfElement, checkAnswer } from '@helpers/sound-helper'
import SoundButton from 'components/sound-button'

export default forwardRef(function AudioMemory(
    { complexity, onHandleChanged }: ActivityProps,
    ref
) {
    const [audioElement] = useState(
        getAudioConfElement(complexity, 'audio_memory')
    )
    const [audio] = useState(new Audio(audioElement.sound));
    const [selectedElements, setSelectedElement] = useState<string[]>([])
    useEffect(() => { })
    useImperativeHandle(ref, () => ({
        getResult: () =>
            checkAnswer(
                complexity,
                audioElement.name,
                selectedElements[0] || '',
                selectedElements[0]
            ),
    }))

    const onChange = (value: string) => {
        setSelectedElement((v) => {
            onHandleChanged()
            if (v.includes(value)) {
                return v.filter((vItem) => vItem !== value)
            } else {
                return [...v, value]
            }
        })
    }

    const onTimerIsDoneHandler = () => {
        audio.pause()
    }



    return (
        <ActivitySlider
            onTimerIsDoneHandler={onTimerIsDoneHandler}
            questionPart={<SoundButton fontSize="4rem" sound={audioElement.sound} customSound={audio} />}
            cardData={audioElement.pictures}
            setSelectedElement={onChange}
            selectedElements={selectedElements}
        />
    )
})
