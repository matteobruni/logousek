import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Button, { ButtonSizesEnum } from '@components/button'
import ClickableIcon from '@components/clickable-icon'
import Logousek from '@components/svg/templates/logousek'
import routes from '@constants/routes'
import { PageTitle } from '@components/typography/header'
import { P3 } from '@components/typography/paragraph'

import { useHomeIntroSectionParallax } from 'hooks/useHomeIntroSectionParallax'
import { useTranslateFunctions } from 'hooks/useTranslateFunctions'

import * as S from './styled'

type IntroSectionProps = {
  scrollTarget: React.MutableRefObject<HTMLDivElement | null>
}

const IntroSection: React.FC<IntroSectionProps> = ({ scrollTarget }) => {
  const {
    logousekParallax,
    descriptionWrapperParallax,
    hillParallax,
    firstTreeParallax,
    secondTreeParallax,
  } = useHomeIntroSectionParallax(scrollTarget)

  const { tHome, tCommon } = useTranslateFunctions()
  const router = useRouter()
  const introSectionElement = useRef(null)

  const redirectToGameMenu = () => {
    router.push(routes.gameMenu)
  }

  return (
    <S.IntroSection id="introduction">
      <S.IntroSectionContainer
        ref={introSectionElement}
        id="IntroSectionContainerId"
      >
        <nav>
          <Button size={ButtonSizesEnum.s} onClick={redirectToGameMenu}>
            {tCommon('buttons.play')}
          </Button>
        </nav>
        <S.DescriptionWrapper ref={descriptionWrapperParallax.ref}>
          <S.Description>
            <PageTitle type="ghost">{tCommon('appName')}</PageTitle>
            <P3 type="ghost">{tHome('introSection.description')}</P3>
            <S.ButtonRow>
              <Button size={ButtonSizesEnum.s} onClick={redirectToGameMenu}>
                {tCommon('buttons.play')}
              </Button>
            </S.ButtonRow>
          </S.Description>
        </S.DescriptionWrapper>
      </S.IntroSectionContainer>
      <S.Hill ref={hillParallax.ref} />
      <S.LogousekWrapper ref={logousekParallax.ref} className="spinner">
        <Logousek />
      </S.LogousekWrapper>
      <S.FirstForegroundTreeWrapper ref={firstTreeParallax.ref}>
        <Image
          width="500"
          height="600"
          src="/images/trees/tree01.svg"
          alt="logousek tree"
        />
      </S.FirstForegroundTreeWrapper>
      <S.SecondForegroundTreeWrapper ref={secondTreeParallax.ref}>
        <Image
          width="500"
          height="600"
          src="/images/trees/tree02.svg"
          alt="logousek second tree"
        />
      </S.SecondForegroundTreeWrapper>
      <S.IntroSectionPlayButton>
        <ClickableIcon icon="play_circle_filled" onClick={redirectToGameMenu} />
      </S.IntroSectionPlayButton>
    </S.IntroSection>
  )
}

export default IntroSection
