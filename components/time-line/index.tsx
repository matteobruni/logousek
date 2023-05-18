import React from 'react'
import Bubble from '../bubble'
import * as S from "./styled"

const NEWS = [
  {
    desc: 'Zahájení prací na aplikaci',
    data: new Date('10.9.2022')
  },
  {
    desc: 'Vydání 1. beta verze aplikace',
    data: new Date('01.30.2022')
  },
  {
    desc: 'Vydání 2. beta verze aplikace',
    data: new Date('01.02.2023')
  },
  {
    desc: 'Ukončení práce na aplikaci',
    data: new Date('30.05.2023')
  }
]

const TimeLine = () => {
  return (
    <S.Wrapper>
      <S.CenterLine />
      {NEWS.map((newObj, index) => (
        <Bubble
          leftSide={index % 2 === 0}
          desc={newObj.desc}
          date={newObj.data}
          key={`new-${index}`}
        />
      ))}
    </S.Wrapper>
  )
}

export default TimeLine
