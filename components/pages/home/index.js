import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import RouteWrapper from "../../../helpers/route-wrapper";
import Button from "../../button";
import WelcomePageHeader from "../../welcome-page-header/welcome-page-header";
import WelcomePageFooter from "../../welcome-page-footer/welcome-page-footer";
import ClickableIcon from "../../clickable-icon/clickable-icon";
import WelcomePageAboutUsList from "../../welcome-page-about-us-list/welcome-page-about-us-list";
import TimeLine from "../../time-line/time-line";
import RoundFooter from "../../round-footer";
import Sidebar from "../../side-bar";
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
  RoundFooterWrapper,
  WelcomeRowWrapper,
  GameSamplesSectionImageWrapper,
  GameSamplesSection,
  HomeWrapper,
  LogousekWrapper,
  FirstForegroundTreeWrapper,
  SecondForegroundTreeWrapper,
  Hill,
} from "./styled";
import GameMenuCard from "../../game-menu-card";
import FadeIn from "../../animations/fade-in";
import Pump from "../../animations/pump";
import Logousek from "../../svg/templates/logousek";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { size } from "../../../constants/screens-conf";

export default function Home() {
  const windowDimensions = useWindowDimensions();
  const introSectionElement = useRef(null);
  const logousekElement = useRef(null);
  const firstForegroundTreeElement = useRef(null);
  const secondForegroundTreeElement = useRef(null);
  const hillElement = useRef(null);
  const router = useRouter();
  const redirectToLogin = () => {
    router.push("/login-screen");
  };

  const parseNumberFromPixelMeasure = (string) => {
    return Number(string.slice(0, -2)) ?? 0;
  };

  const onScrollHandler = (event, event2) => {
    const isMobile =
      parseNumberFromPixelMeasure(size.laptop) > windowDimensions.width;
    console.log("isMobile", isMobile);

    introSectionElement.current.style.left =
      event.currentTarget.scrollTop + "px";

    introSectionElement.current.style.top =
      event.currentTarget.scrollTop * 0.7 + "px";

    logousekElement.current.style.bottom =
      -event.currentTarget.scrollTop * 0.22 + 40 + "px";
    logousekElement.current.style.scale = Math.abs(
      (windowDimensions.height - event.currentTarget.scrollTop * 0.7) /
        windowDimensions.height
    );

    firstForegroundTreeElement.current.style.scale =
      (windowDimensions.height + event.currentTarget.scrollTop) /
      windowDimensions.height;
    firstForegroundTreeElement.current.style.left =
      event.currentTarget.scrollTop * 0.3 + (isMobile ? -250 : 20) + "px";
    secondForegroundTreeElement.current.style.scale =
      (windowDimensions.height + event.currentTarget.scrollTop) /
      windowDimensions.height;
    secondForegroundTreeElement.current.style.right =
      event.currentTarget.scrollTop * 0.3 + (isMobile ? -250 : 20) + "px";
    hillElement.current.style.height =
      40 -
      (100 / windowDimensions.height) * (event.currentTarget.scrollTop * 0.4) +
      "vh";
  };

  return (
    <RouteWrapper colorScheme="white">
      <HomeWrapper onScroll={onScrollHandler}>
        <Head>
          <title>Logoušek</title>
        </Head>
        <WelcomeRowWrapper>
        <Sidebar pageNav={[
            {
              name: "introduction",
              icon: "cake",
              title: "Představení",
              link: "#introduction"
            },
            {
              name: "gameInfo",
              icon: "call",
              title: "Obsah aplikace",
              link: "#gameInfo"
            },
            {
              name: "activityList",
              icon: "camera_alt",
              title: "Představení",
              link: "#activityList"
            },
            {
              name: "aboutAs",
              icon: "card_giftcard",
              link: "#aboutAs",
              title: "Autoři"
            },
          ]} applicationNav={[
            { name: "introduction", icon: "cake", title: "Visual" },
            { name: "gameInfo", icon: "call", title: "Sluch" },
            {
              name: "activityList",
              icon: "camera_alt",
              title: "Serialita",
            },
            {
              name: "aboutAs",
              icon: "card_giftcard",
              title: "Login",
            },
            { name: "introduction", icon: "cake", title: "Visual" },
            { name: "gameInfo", icon: "call", title: "Sluch" },
            {
              name: "activityList",
              icon: "camera_alt",
              title: "Serialita",
            },
            {
              name: "aboutAs",
              icon: "card_giftcard",
              title: "Login",
            },
          ]}/>
          <Container>
            <IntroSection id="introduction">
              <WelcomeBlock ref={introSectionElement} id="welcomeBlockId">
                <nav>
                  <Button size="s" onClick={redirectToLogin}>
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
                      <Button size="s" onClick={redirectToLogin}>
                        Hrát
                      </Button>
                    </div>
                  </IntroSectionTextStyle>
                </RowBlock>
              </WelcomeBlock>
              <Hill ref={hillElement} />
              <LogousekWrapper ref={logousekElement}>
                <Logousek alt="logousek" />
              </LogousekWrapper>
              <FirstForegroundTreeWrapper ref={firstForegroundTreeElement}>
                <Image
                  width="350"
                  height="400"
                  src="/images/trees/tree01.svg"
                  alt="logousek tree"
                />
              </FirstForegroundTreeWrapper>
              <SecondForegroundTreeWrapper ref={secondForegroundTreeElement}>
                <Image
                  width="350"
                  height="400"
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
                <WelcomePageHeader>Co aplikace nabídne:</WelcomePageHeader>
                <GameInfoSectionArticles>
                  <FadeIn>
                    <GameMenuCard
                      gameInfo={{
                        name: "GameMenuCard1",
                        title: "Zraková cvičení",
                      }}
                    />
                  </FadeIn>
                  <FadeIn>
                    <GameMenuCard
                      gameInfo={{
                        name: "GameMenuCard2",
                        title: "Sluchová cvičení",
                      }}
                    />
                  </FadeIn>

                  <FadeIn>
                    <GameMenuCard
                      gameInfo={{
                        name: "GameMenuCard3",
                        title: "Cvičení na serialitu",
                      }}
                    />
                  </FadeIn>
                  <FadeIn>
                    <GameMenuCard
                      gameInfo={{
                        name: "GameMenuCard4",
                        title: "Procvičování jazyka",
                      }}
                    />
                  </FadeIn>
                </GameInfoSectionArticles>
              </GameInfoWrapper>
            </GameInfoSection>
            <GameSamplesSection>
              <WelcomePageHeader>Ukázka aplikace</WelcomePageHeader>
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
              <WelcomePageHeader>Seznam aktivit</WelcomePageHeader>
              <TimeLine />
            </ActivityListSection>
            <AboutAsSection id="aboutAs">
              <WelcomePageHeader>O nás</WelcomePageHeader>
              <WelcomePageAboutUsList />
            </AboutAsSection>
            <WelcomePageFooter />
          </Container>
        </WelcomeRowWrapper>
        {/* <RoundFooterWrapper>
          <RoundFooter
            activityTypes={[
              { icon: "arrow_drop_down" },
              { icon: "arrow_drop_up" },
              {
                icon: isMenuShow ? "close" : "menu",
                onClick: toggleMenu,
                color: "grey",
              },
            ]}
          />
        </RoundFooterWrapper> */}
      </HomeWrapper>
    </RouteWrapper>
  );
}
