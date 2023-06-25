import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useEffect,
} from 'react'
import { ActivityProps } from 'components/pages/activity'
import ActivitySlider from '@components/activity-slider'
import { getAudioConfElement, checkAnswer } from '@helpers/sound-helper'
import SoundButton from 'components/sound-button'

export default forwardRef(function Memory(
    { complexity, onHandleChanged }: ActivityProps,
    ref
) {
    const [audioElement] = useState(
        getAudioConfElement(complexity, 'audio_memory')
    )
    const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined)
    const [selectedElements, setSelectedElement] = useState<string[]>([])

    useEffect(() => {
        setAudio(new Audio(audioElement.sound))
    }, [audioElement.sound])

    useImperativeHandle(ref, () => ({
        getResult: () =>
            checkAnswer(
                complexity,
                audioElement.name,
                selectedElements[0] || '',
                "audio_memory"
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
        audio && audio.pause()
    }

    return (
        <ActivitySlider
            onTimerIsDoneHandler={onTimerIsDoneHandler}
            questionPart={
                <SoundButton
                    fontSize="4rem"
                    sound={audioElement.sound}
                    customSound={audio}
                />
            }
            cardData={audioElement.pictures}
            setSelectedElement={onChange}
            selectedElements={selectedElements}
        />
    )
})
