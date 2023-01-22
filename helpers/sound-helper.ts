import { getRandomElementFromList } from "./array-helper";
import { shuffle } from "./array-helper";
import soundDiffConf from "constants/sound-diff-conf";
import wordDiffConf from "constants/word-diff-conf";
import audioMemoryConf from "constants/audio-memory-conf";

export type pictureType = {
  name: string, svg: React.FC<any>
}

export type audioDiffConfType = {
  [key: string]: {
    name: string,
    incorrect: pictureType[],
    correct: pictureType,
    sound: string
  }[]
}

const getAudioConf = (activityName: string) => activityName === "word_differentiation" ? wordDiffConf : activityName === "audio_memory" ? audioMemoryConf : soundDiffConf

export const getAudioConfElement = (difficulty: string, activityName: string) => {
  const audioConf = getAudioConf(activityName)
  const audiosArray = [...audioConf[difficulty]];
  const audioElement = getRandomElementFromList(audiosArray, 1)[0] || {};
  return { name: audioElement.name, sound: audioElement.sound, pictures: audioElement.incorrect && audioElement.correct ? shuffle([...audioElement.incorrect, audioElement.correct]) : [] }
}

export const checkAnswer = (difficulty: string, audioName: string, selectedCardName: string, activityName: string) => {
  const audioConf = getAudioConf(activityName)
  const audiosArray = audioConf[difficulty];
  const correctAnswer = audiosArray.find(audio => audio.name === audioName)?.correct
  return correctAnswer?.name === selectedCardName
}
