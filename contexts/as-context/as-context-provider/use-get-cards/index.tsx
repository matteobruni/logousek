import { useState } from 'react'
import { getRandomSvgs } from '@helpers/svg-helpers'
import { SvgWrapper } from './styled'
import { shuffle } from '@helpers/array-helper'

type ViewBoxSettingType = {
  [settingKey: string]: string
}
type ViewBoxConfType = { [key: number]: ViewBoxSettingType }
type SvgHashType = { [key: number]: string[] }

export type CardType = { img: React.ReactElement, keyImage: string }

const VIEWBOX_CONF: ViewBoxConfType = {
  2: {
    leftTop: '0 0 512 1024',
    rightTop: '512 0 512 1024'
  },
  4: {
    leftTop: '0 0 512 1024',
    rightTop: '512 0 512 1024',
    leftBottom: '0 512 512 1024',
    rightBottom: '512 512 512 1024'
  },
  6: {
    leftTop: '0 0 512 1024',
    rightTop: '512 0 512 1024',
    leftMiddle: '0 341 512 1024',
    rightMiddle: '512 341 512 1024',
    leftBottom: '0 682 512 1024',
    rightBottom: '512 682 512 1024'
  }
}

export const SVGS_HASH: SvgHashType = {
  2: ['leftTop', 'rightTop'],
  4: ['leftTop', 'rightTop', 'leftBottom', 'rightBottom'],
  6: ['leftTop', 'rightTop', 'leftMiddle', 'rightMiddle', 'leftBottom', 'rightBottom']
}

const useGetCards = (count: number) => {
  const _getCards = () => {
    const [Svg] = getRandomSvgs(1)
    return shuffle(new Array(count).fill(undefined).map((card, index) => {
      const keyImage = (SVGS_HASH[count])[index]
      return {
        img: (
          <SvgWrapper>
            <Svg customViewBox={VIEWBOX_CONF[count][keyImage]} />
          </SvgWrapper>
        ),
        keyImage
      }
    }))
  }

  const [cards, setData] = useState(_getCards())

  const resetCards = () => {
    setData(_getCards())
  }

  return [cards, setData, resetCards]
}

export default useGetCards
