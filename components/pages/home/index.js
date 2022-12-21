import React, { useState, useRef } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import RouteWrapper from "../../../helpers/route-wrapper";
import Button from "../../button";
import WelcomePageHeader from "../../welcome-page-header/welcome-page-header";
import WelcomePageFooter from "../../welcome-page-footer/welcome-page-footer";
import ClickableIcon from "../../clickable-icon/clickable-icon";
import WelcomePageNavItemList from "../../welcome-page-sidebar-item-list/welcome-page-sidebar-item-list";
import WelcomePageNavItemRectList from "../../welcome-page-sidebar-item-rect-list/welcome-page-sidebar-item-rect-list";
import WelcomePageAboutUsList from "../../welcome-page-about-us-list/welcome-page-about-us-list";
import TimeLine from "../../time-line/time-line";
import RoundFooter from "../../round-footer";
import DarkModeSwitch from "../../dark-mode-switch";
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
  Sidebar,
  SidebarItemsWrapper,
  WelcomePageNavigation,
  ApplicationNavigation,
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
import { redirect } from "next/dist/server/api-utils";

export default function Home() {
  const [isMenuShow, setIsMenuShow] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuShow((v) => !v);
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

  const redirect = (link) => {
    setIsMenuShow(false);
    router.push(link);
  };

  return (
    <RouteWrapper colorScheme="white">
      <HomeWrapper onScroll={onScrollHandler}>
        <Head>
          <title>Logoušek</title>
        </Head>
        <WelcomeRowWrapper>
          <Sidebar
            onMouseEnter={() => setIsMenuShow(true)}
            onMouseLeave={() => setIsMenuShow(false)}
            isMenuShow={isMenuShow}
          >
            <SidebarItemsWrapper isMenuShow={isMenuShow}>
              <WelcomePageNavigation>
                <h4>Navigace stránky</h4>
                <WelcomePageNavItemList
                  itemList={[
                    {
                      name: "introduction",
                      icon: "cake",
                      title: "Představení",
                      onClick: () => {
                        redirect("#introduction");
                      },
                    },
                    {
                      name: "gameInfo",
                      icon: "call",
                      title: "Obsah aplikace",
                      onClick: () => {
                        redirect("#gameInfo");
                      },
                    },
                    {
                      name: "activityList",
                      icon: "camera_alt",
                      title: "Představení",
                      onClick: () => {
                        redirect("#activityList");
                      },
                    },
                    {
                      name: "aboutAs",
                      icon: "card_giftcard",
                      title: "Autoři",
                      onClick: () => {
                        redirect("#aboutAs");
                      },
                    },
                  ]}
                />
              </WelcomePageNavigation>
              <ApplicationNavigation>
                <h4>Navigace aplikace</h4>
                <WelcomePageNavItemRectList
                  itemList={[
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
                  ]}
                />
                <DarkModeSwitch />
              </ApplicationNavigation>
            </SidebarItemsWrapper>
          </Sidebar>
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
                <Logousek />
              </LogousekWrapper>
              <FirstForegroundTreeWrapper ref={firstForegroundTreeElement}>
                <Image
                  width="350"
                  height="400"
                  src="/images/trees/tree01.svg"
                  alt="img"
                />
              </FirstForegroundTreeWrapper>
              <SecondForegroundTreeWrapper ref={secondForegroundTreeElement}>
                <Image
                  width="350"
                  height="400"
                  src="/images/trees/tree02.svg"
                  alt="img"
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
                    alt="img"
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
        <RoundFooterWrapper>
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
        </RoundFooterWrapper>
      </HomeWrapper>
    </RouteWrapper>
  );
}
