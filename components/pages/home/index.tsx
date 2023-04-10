import React, { useRef } from 'react'
import RouteWrapper from '../../route-wrapper'
import Footer from './footer'
import Sidebar from '../../side-bar'
import IntroSection from './intro-section'
import * as S from './styled'
import { useHomeSideBarItems } from '@hooks/useHomeSideBarItems'
import GameInfoSection from './game-info-section'
import GameSamplesSection from './game-samples-section'
import ActivityListSection from './activity-list-section'
import AboutAsSection from './about-us-section'
import { useTranslateFunctions } from 'hooks/useTranslateFunctions'


const Home = () => {
  const { tCommon } = useTranslateFunctions()
  const { applicationNavItems, sideBarPageNavItems } = useHomeSideBarItems()

  const scrollTarget = useRef<HTMLDivElement | null>(null);


  return (
    <RouteWrapper colorScheme="white" title={tCommon("appName")}>
      <S.HomeWrapper ref={scrollTarget}>
        <S.WelcomeRowWrapper>
          <Sidebar pageNav={sideBarPageNavItems} applicationNav={applicationNavItems} />
          <S.Container>
            <IntroSection scrollTarget={scrollTarget} />
            <GameInfoSection />
            <GameSamplesSection />
            <ActivityListSection />
            <AboutAsSection />
            <Footer />
          </S.Container>
        </S.WelcomeRowWrapper>
      </S.HomeWrapper>
    </RouteWrapper>
  )
}

export default Home
