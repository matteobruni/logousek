import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react'
import SerialityContext from '..'
import { SvgWrapper } from './styled'
import { shuffle, getRandomElementFromList } from '@helpers/array-helper'
import { threePictures, svgConfType } from 'constants/seriality-conf'

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
        [...(type === 'threePictures' ? threePictures : [])],
        1
      ) || []
    console.log("test4233")
    const svgs: svgConfType['svgs'] = svgConf?.svgs
    const svgInCardType = svgs?.map((Card: React.FC, index: number) => {
      return {
        img: (
          <SvgWrapper>
            <Card />
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
    console.log("cards333", cards)
    const updatedCard = [...cards]
    return {
      checkResult: () => {
        const isCorrect = updatedCard.reduce((result, current, index) => {
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
  return (
    <SerialityContext.Provider
      value={serialityContextValue}
    >
      {children}
    </SerialityContext.Provider>
  )
})
