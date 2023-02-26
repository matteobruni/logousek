import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback
} from 'react'
import SerialityContext from '..'
import { SvgWrapper } from './styled'
import { shuffle, getRandomElementFromList } from '@helpers/array-helper'
import { threePictures, twoPictures, svgConfType } from 'constants/seriality-conf'

export type SerialityContextProviderInterface = {
  checkResult: () => boolean
}


type SerialityContextProviderType = {
  children: any,
  type: string,
}

export type CardType = { img: React.ReactNode, keyImage: string }

export type SerialityContextValueType = {
  cards: CardType[]
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>
  correctCards: string[]
}

export default forwardRef(function AsContextProvider(
  { children, type }: SerialityContextProviderType,
  ref
) {
  const [correctCards, setCorrectCards] = useState<string[]>([])
  const [cards, setCards] = useState<CardType[]>([])

  useEffect(() => {
    console.log("cards22", cards)
  }, [cards])

  useEffect(() => {
    const [svgConf] =
      getRandomElementFromList(
        [...(type === 'threePictures' ? threePictures : twoPictures)],
        1
      ) || []
    const svgs: svgConfType['svgs'] = svgConf?.svgs
    const svgInCardType = svgs?.map((Card: React.ReactNode, index: number) => {
      return {
        img: (
          <SvgWrapper>
            {Card}
          </SvgWrapper>
        ),
        keyImage: `image_${index}`,
      }
    })
    setCorrectCards(svgInCardType.map(svg => svg.keyImage))
    setCards(
      shuffle(
        svgInCardType
      )
    )
  }, [type])

  useImperativeHandle(ref, (): SerialityContextProviderInterface => {
    console.log("test253", cards.map(card => card.keyImage), (() => {
      const isCorrect = cards.reduce((result, current, index) => {
        current.keyImage !== correctCards[index] && (result = false)
        return result;
      }, true)
      return isCorrect
    })())
    return {
      checkResult: () => {
        const isCorrect = cards.reduce((result, current, index) => {
          current.keyImage !== correctCards[index] && (result = false)
          return result;
        }, true)
        return isCorrect
      }
    }
  },
    [cards, correctCards])

  const serialityContextValue: SerialityContextValueType
    = {
    cards,
    setCards,
    correctCards
  }

  console.log("test252", cards.map(card => card.keyImage))
  return (
    <SerialityContext.Provider
      value={serialityContextValue}
    >
      {children}
    </SerialityContext.Provider>
  )
})
