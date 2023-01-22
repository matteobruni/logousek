import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { useRouter } from 'next/router'
import { getAudioConfElement, checkAnswer } from '@helpers/sound-helper'
import { ActivityProps } from '@components/pages/activity'
import CardWrapper from '@components/card-wrapper'
import SoundButton from '../../../sound-button'
import * as S from './styled'

export default forwardRef(function AudioDifferentiation(
  { complexity, onHandleChanged }: ActivityProps,
  ref
) {

  const router = useRouter()
  const activityName = router.query?.activityName as string

  const [audioElement] = useState(getAudioConfElement(complexity, activityName))
  const [selected, setSelected] = useState<string | undefined>()
  useImperativeHandle(ref, () => ({
    getResult: () => checkAnswer(complexity, audioElement.name, selected || '', activityName),
  }))

  const onCardSelectHandle = (cardName: string) => {
    onHandleChanged()
    setSelected(cardName)
  }
  return (
    <div>
      <S.SoundWrapper>
        <S.SoundButtonWrapper>
          <SoundButton fontSize="4rem" sound={audioElement.sound} />
        </S.SoundButtonWrapper>
        <S.Label>Přehrajde si zvuk</S.Label>
      </S.SoundWrapper>
      <CardWrapper
        cards={audioElement.pictures}
        onChange={onCardSelectHandle}
        selected={selected}
      />
      <S.Label>Vyberte správnou odpověď</S.Label>
    </div>
  )
})
