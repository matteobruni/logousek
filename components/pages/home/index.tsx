import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import RouteWrapper from '../../route-wrapper'
import Button, { ButtonSizesEnum } from '../../button'
import Header from './components/header'
import Footer from './components/footer'
import ClickableIcon from '@components/clickable-icon'
import AboutUsList from './components/about-us-list'
import TimeLine from '../../time-line'
import RoundFooter from '../../round-footer'
import Sidebar from '../../side-bar'
import {
  Container,
  IntroSection,
  WelcomeBlock,
  RowBlock,
  IntroSectionTextStyle,
  IntroSectionPlayButton,
  GameInfoSection,
  GameInfoWrapper,
  GameInfoSectionArticles,
  ActivityListSection,
  AboutAsSection,
  WelcomeRowWrapper,
  GameSamplesSectionImageWrapper,
  GameSamplesSection,
  HomeWrapper,
  LogousekWrapper,
  FirstForegroundTreeWrapper,
  SecondForegroundTreeWrapper,
  Hill
} from './styled'
import Cards from '../../card'
import FadeIn from '../../animations/fade-in'
import Pump from '../../animations/pump'
import Logousek from '../../svg/templates/logousek'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { useParallax } from 'react-scroll-parallax';

const SIDEBAR_APPLICATION_NAV = [
  { name: 'introduction', icon: 'cake', title: 'Visual' },
  { name: 'gameInfo', icon: 'call', title: 'Sluch' },
  {
    name: 'activityList',
    icon: 'camera_alt',
    title: 'Serialita'
  },
  {
    name: 'aboutAs',
    icon: 'card_giftcard',
    title: 'Login'
  },
  { name: 'introduction', icon: 'cake', title: 'Visual' },
  { name: 'gameInfo', icon: 'call', title: 'Sluch' },
  {
    name: 'activityList',
    icon: 'camera_alt',
    title: 'Serialita'
  },
  {
    name: 'aboutAs',
    icon: 'card_giftcard',
    title: 'Login'
  }
]

const Home = () => {
  const windowDimensions = useWindowDimensions()
  const introSectionElement = useRef(null)
  const router = useRouter()
  const scrollTarget = useRef<HTMLDivElement | null>(null);
  const logousekParallax = useParallax<HTMLDivElement>({
    rootMargin: { bottom: 50, top: 0, left: 0, right: 0 },
    scale: [1, 0.35, 'easeInQuad'],
    speed: -5,
    startScroll: 0,
    endScroll: windowDimensions?.height || 1080,
    targetElement: scrollTarget.current ? scrollTarget.current : undefined,
  });

  const hillParallax = useParallax<HTMLDivElement>({
    startScroll: 0,
    translateY: [0, (windowDimensions?.height || 1080) / 15, 'easeInQuad'],
    endScroll: windowDimensions?.height || 1080,
    targetElement: scrollTarget.current ? scrollTarget.current : undefined,
  });
  console.log("windowDimensions?.height", windowDimensions?.height)
  const firstTreeParallax = useParallax<HTMLDivElement>({
    startScroll: 0,
    translateY: [0, -(windowDimensions?.height || 1080) / 20, 'easeInQuad'],
    translateX: [0, (windowDimensions?.height || 1080) / 15, 'easeInQuad'],
    scale: [1, 2.5, 'easeInQuad'],
    endScroll: windowDimensions?.height || 1080,
    targetElement: scrollTarget.current ? scrollTarget.current : undefined,
  });

  const secondTreeParallax = useParallax<HTMLDivElement>({
    startScroll: 0,
    translateY: [0, -(windowDimensions?.height || 1080) / 20, 'easeInQuad'],
    translateX: [0, -(windowDimensions?.height || 1080) / 15, 'easeInQuad'],
    scale: [1, 2.5, 'easeInQuad'],
    endScroll: windowDimensions?.height || 1080,
    targetElement: scrollTarget.current ? scrollTarget.current : undefined,
  });


  const redirectToLogin = () => {
    redirect('/login-screen')
  }

  const redirect = (url: string) => {
    router.push(url)
  }

  // const parseNumberFromPixelMeasure = (string) => {
  //   return Number(string.slice(0, -2)) ?? 0
  // }

  // const onScrollHandler = (event, event2) => {
  //   const isMobile =
  //     parseNumberFromPixelMeasure(size.laptop) > windowDimensions.width

  //   introSectionElement.current.style.left =
  //     event.currentTarget.scrollTop + 'px'

  //   introSectionElement.current.style.top =
  //     event.currentTarget.scrollTop * 0.7 + 'px'

  //   logousekElement.current.style.bottom =
  //     -event.currentTarget.scrollTop * 0.22 + 40 + 'px'
  //   logousekElement.current.style.scale = Math.abs(
  //     (windowDimensions.height - event.currentTarget.scrollTop * 0.7) /
  //       windowDimensions.height
  //   )

  //   firstForegroundTreeElement.current.style.scale =
  //     (windowDimensions.height + event.currentTarget.scrollTop) /
  //     windowDimensions.height
  //   firstForegroundTreeElement.current.style.left =
  //     event.currentTarget.scrollTop * 0.3 + (isMobile ? -250 : 20) + 'px'
  //   secondForegroundTreeElement.current.style.scale =
  //     (windowDimensions.height + event.currentTarget.scrollTop) /
  //     windowDimensions.height
  //   secondForegroundTreeElement.current.style.right =
  //     event.currentTarget.scrollTop * 0.3 + (isMobile ? -250 : 20) + 'px'
  //   hillElement.current.style.height =
  //     40 -
  //     (100 / windowDimensions.height) * (event.currentTarget.scrollTop * 0.4) +
  //     'vh'
  // }
  const sideBarPageNav = [
    {
      name: 'introduction',
      icon: 'cake',
      title: 'Představení',
      onClick: () => redirect('#introduction')
    },
    {
      name: 'gameInfo',
      icon: 'call',
      title: 'Obsah aplikace',
      onClick: () => redirect('#gameInfo')
    },
    {
      name: 'activityList',
      icon: 'camera_alt',
      title: 'Představení',
      onClick: () => redirect('#activityList')
    },
    {
      name: 'aboutAs',
      icon: 'card_giftcard',
      title: 'Autoři',
      onClick: () => redirect('#aboutAs')
    }
  ]

  return (
    <RouteWrapper colorScheme="white">
      <HomeWrapper ref={scrollTarget}>{/*onScroll={onScrollHandler}>*/}
        <Head>
          <title>Logoušek</title>
        </Head>
        <WelcomeRowWrapper>
          <Sidebar pageNav={sideBarPageNav} applicationNav={SIDEBAR_APPLICATION_NAV} />
          <Container>
            <IntroSection id="introduction">
              <WelcomeBlock ref={introSectionElement} id="welcomeBlockId">
                <nav>
                  <Button size={ButtonSizesEnum.s} onClick={redirectToLogin}>
                    Hrát
                  </Button>
                </nav>
                <RowBlock>
                  <IntroSectionTextStyle>
                    <h1>Logoušek</h1>
                    <h3>
                      Aplikace pro předškolní děti podporující logopedickou
                      prevenci hravou formou.
                    </h3>
                    <div className="introSectionButtonRow">
                      <Button size={ButtonSizesEnum.s} onClick={redirectToLogin}>
                        Hrát
                      </Button>
                    </div>
                  </IntroSectionTextStyle>
                </RowBlock>
              </WelcomeBlock>
              <Hill ref={hillParallax.ref} />
              <LogousekWrapper ref={logousekParallax.ref} className="spinner">
                <Logousek />
              </LogousekWrapper>
              <FirstForegroundTreeWrapper ref={firstTreeParallax.ref}>
                <Image
                  width="500"
                  height="600"
                  src="/images/trees/tree01.svg"
                  alt="logousek tree"
                />
              </FirstForegroundTreeWrapper>
              <SecondForegroundTreeWrapper ref={secondTreeParallax.ref}>
                <Image
                  width="500"
                  height="600"
                  src="/images/trees/tree02.svg"
                  alt="logousek second tree"
                />
              </SecondForegroundTreeWrapper>
              <IntroSectionPlayButton>
                <ClickableIcon
                  icon="play_circle_filled"
                  onClick={redirectToLogin}
                />
              </IntroSectionPlayButton>
            </IntroSection>
            <GameInfoSection id="gameInfo">
              <GameInfoWrapper>
                <Header>Co aplikace nabídne:</Header>
                <GameInfoSectionArticles>
                  <FadeIn>
                    <Cards
                      gameInfo={{
                        name: 'Cards1',
                        title: 'Zraková cvičení',
                        image: "#"
                      }}
                    />
                  </FadeIn>
                  <FadeIn>
                    <Cards
                      gameInfo={{
                        name: 'Cards2',
                        title: 'Sluchová cvičení',
                        image: "#"
                      }}
                    />
                  </FadeIn>

                  <FadeIn>
                    <Cards
                      gameInfo={{
                        name: 'Cards3',
                        title: 'Cvičení na serialitu',
                        image: "#"
                      }}
                    />
                  </FadeIn>
                  <FadeIn>
                    <Cards
                      gameInfo={{
                        name: 'Cards4',
                        title: 'Procvičování jazyka',
                        image: "#"
                      }}
                    />
                  </FadeIn>
                </GameInfoSectionArticles>
              </GameInfoWrapper>
            </GameInfoSection>
            <GameSamplesSection>
              <Header>Ukázka aplikace</Header>
              <Pump>
                <GameSamplesSectionImageWrapper>
                  <Image
                    width="400"
                    height="600"
                    src="/images/phone.png"
                    alt="logousek preview"
                  />
                </GameSamplesSectionImageWrapper>
              </Pump>
            </GameSamplesSection>
            <ActivityListSection id="activityList">
              <Header>Seznam aktivit</Header>
              <TimeLine />
            </ActivityListSection>
            <AboutAsSection id="aboutAs">
              <Header>O nás</Header>
              <AboutUsList />
            </AboutAsSection>
            <Footer />
          </Container>
        </WelcomeRowWrapper>
      </HomeWrapper>
    </RouteWrapper>
  )
}

export default Home
