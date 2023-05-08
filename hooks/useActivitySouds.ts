import { feedbackSound } from '@constants/activity-confs/sounds'
import { getRandomElementFromList } from '@helpers/array-helper'

export const useActivitySouds = () => {
    const playAudio = (audio: HTMLAudioElement | undefined) => {
        if (audio) {
            audio.pause()
            audio.currentTime = 0
            audio.play()
        }
    }

    const getNewAudio = (path: string[]) => {
        return new Audio(getRandomElementFromList(path, 1))
    }

    const playWrongAudio = () => {
        playAudio(getNewAudio(feedbackSound.wrong))
    }

    const playSuccessAudio = () => {
        playAudio(getNewAudio(feedbackSound.success))
    }

    return { playWrongAudio, playSuccessAudio }
}
