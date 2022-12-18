import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
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
  IntroSectionPictureWrapper,
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
} from "./styled";
import GameMenuCard from "../../game-menu-card";

export default function Home() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const router = useRouter();
  const redirectToLogin = () => {
    router.push("/login-screen");
  };

  const toggleMenu = () => {
    setIsMenuShow((v) => !v);
  };

  return (
    <RouteWrapper colorScheme="green">
      <WelcomeRowWrapper>
        <Sidebar>
          <SidebarItemsWrapper isMenuShow={isMenuShow}>
            <WelcomePageNavigation>
              <h4>Navigace stránky</h4>
              <WelcomePageNavItemList
                itemList={[
                  { name: "introduction", icon: "cake", title: "Představení" },
                  { name: "gameInfo", icon: "call", title: "Obsah aplikace" },
                  {
                    name: "activityList",
                    icon: "camera_alt",
                    title: "Představení",
                  },
                  {
                    name: "aboutAs",
                    icon: "card_giftcard",
                    title: "Autoři",
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
            <WelcomeBlock>
              <nav>
                <Button size="s" onClick={redirectToLogin}>
                  Hrát
                </Button>
              </nav>
              <RowBlock>
                <IntroSectionTextStyle>
                  <h1>Logousek</h1>
                  <h3>
                    Aplikace vytvořena k logopedické prevenci pro předškolní
                    děti.
                  </h3>
                  <div className="introSectionButtonRow">
                    <Button size="s" onClick={redirectToLogin}>
                      Hrát
                    </Button>
                  </div>
                </IntroSectionTextStyle>
              </RowBlock>
            </WelcomeBlock>
            <IntroSectionPictureWrapper>
              <div className="introSectionPictureStyle">
                <div className="picture">
                  <Image
                    className={`rounded-md`}
                    src="/images/phone.png"
                    width={500}
                    height={500}
                    alt="img"
                  />
                </div>
              </div>
            </IntroSectionPictureWrapper>
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
                <GameMenuCard
                  gameInfo={{ name: "GameMenuCard1", title: "Zraková cvičení" }}
                />

                <GameMenuCard
                  gameInfo={{
                    name: "GameMenuCard2",
                    title: "Sluchová cvičení",
                  }}
                />

                <GameMenuCard
                  gameInfo={{
                    name: "GameMenuCard3",
                    title: "Cvičení na serialitu",
                  }}
                />
                <GameMenuCard
                  gameInfo={{
                    name: "GameMenuCard4",
                    title: "Procvičování jazyka",
                  }}
                />
              </GameInfoSectionArticles>
            </GameInfoWrapper>
          </GameInfoSection>
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
    </RouteWrapper>
  );
}
