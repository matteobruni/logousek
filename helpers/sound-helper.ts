import { getRandomElementFromList } from "./array-helper";
import { shuffle } from "./array-helper";
import getSoundDiffConf from "constants/sound-diff-conf";
import getWordDiffConf from "constants/word-diff-conf";
import audioMemoryConf from "constants/audio-memory-conf";

export type pictureType = {
  name: string, svg: React.ReactNode
}

export type audioDiffConfType = {
  [key: string]: {
    name: string,
    incorrect: pictureType[],
    correct: pictureType,
    sound: string
  }[]
}

const getAudioConf = (activityName: string) => activityName === "word_differentiation" ? getWordDiffConf() : activityName === "audio_memory" ? audioMemoryConf : getSoundDiffConf()

export const getAudioConfElement = (difficulty: string, activityName: string) => {
  const audioConf = getAudioConf(activityName)
  console.log("difficulty", audioConf, difficulty)
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

export const getIncorectItems = (itemName: string, array: { name: string, svg: React.ReactNode }[]) => {
  const filtredArray = array.filter(firstLevelImage => firstLevelImage.name !== itemName)
  return getRandomElementFromList(filtredArray, 2)
}