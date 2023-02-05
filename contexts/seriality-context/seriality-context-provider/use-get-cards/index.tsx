import { useState } from 'react'
import { getRandomSvgs } from '@helpers/svg-helpers'
import { SvgWrapper } from './styled'
import { shuffle } from '@helpers/array-helper'

export type CardType = { img: React.ReactElement, keyImage: string }

const useGetCards = (count: number) => {
  const _getCards = (): CardType[] => {
    const svgs = getRandomSvgs(count)
    console.log("svgs", svgs)

    return shuffle(svgs.map((Card: React.FC, index: number) => {
      return {
        img: (
          <SvgWrapper>
            <Card />
          </SvgWrapper>
        ),
        keyImage: `image_${index}`
      }
    }))
  }

  const [cards, setData] = useState<CardType[]>(_getCards())

  return { cards, setCards: setData }
}

export default useGetCards
