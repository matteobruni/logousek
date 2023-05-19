import React, { useRef } from 'react'
import RouteWrapper from '../../route-wrapper'
import Footer from './footer'
import Sidebar from '../../side-bar'
import Intro from './intro-section'
import * as S from './styled'
import { useHomeSideBarItems } from '@hooks/useHomeSideBarItems'
import GameInfo from './game-info-section'
import GameSamples from './game-samples-section'
import ActivityList from './activity-list-section'
import AboutAs from './about-us-section'
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
            <Intro scrollTarget={scrollTarget} />
            <GameInfo />
            <GameSamples />
            <ActivityList />
            <AboutAs />
            <Footer />
          </S.Container>
        </S.WelcomeRowWrapper>
      </S.HomeWrapper>
    </RouteWrapper>
  )
}

export default Home
