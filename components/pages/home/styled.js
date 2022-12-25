import styled from "styled-components";
import { devices } from "../../../constants/screens-conf";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.eighty};
  z-index: 2;
  flex: 1;
`;

export const HomeWrapper = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: overlay;
  overflow-x: hidden;
  scrollbar-gutter: stable;
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
`;

export const LogousekWrapper = styled.div`
  & > svg {
    width: 400px;
  }
  width: 100%;
  transition-duration: 0.2s;
  display: flex;
  justify-content: center;
  height: 400px;
  position: absolute;
  bottom: 40px;
`;

export const FirstForegroundTreeWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  transition-duration: 0.2s;
  left: -250px;
  z-index: 2;
  @media ${devices.laptop} {
    left: 20px;
  }
`;

export const SecondForegroundTreeWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  transition-duration: 0.2s;
  right: -250px;
  z-index: 4;
  @media ${devices.laptop} {
    right: 20px;
  }
`;

export const Hill = styled.div`
  position: absolute;
  transition-duration: 0.2s;
  bottom: 0px;
  width: 150vw;
    left: 0vw;
  height: 40vh;
  background: green;
  border-top-right-radius: 100%;
  @media ${devices.laptop} {
    width: 100vw;
  }
`;

export const IntroSection = styled(Section)`
  /* background-image: url(https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149161561.jpg?w=1380&t=st=1671647950~exp=1671648550~hmac=8950676…);
    background-repeat: no-repeat;
    background-position: bottom; */
  background: ${({ theme }) =>
    `linear-gradient(to left bottom,${theme.colors.lightGrey}, ${theme.colors.fourty})`};

  border-bottom-right-radius: 5rem;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  @media ${devices.laptop} {
    border-bottom-right-radius: 15rem;
  }
`;

export const WelcomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  border-bottom-right-radius: 7rem;
  position: absolute;
  z-index: 3;
  & > nav {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
  }

  @media ${devices.laptop} {
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(50vw - 2rem);
    & > nav {
      display: none;
    }
  }
`;

export const RowBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;
  padding-top: 0px;

  @media ${devices.mobileS} {
    padding: 2rem 2rem;
  }
  @media ${devices.mobileL} {
    padding: 2rem 4rem;
  }


`;

export const IntroSectionTextStyle = styled.div`
  & > .introSectionButtonRow {
    display: none;
  }

  & > h1 {
    margin-top: 0.3rem;
    font-size: 3.2rem;
    margin-bottom: 0.3rem;
  }

  @media ${devices.laptop} {
    & > .introSectionButtonRow {
      display: flex;
      justify-content: flex-end;
    }

    & > h1 {
      font-size: 5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const IntroSectionPlayButton = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  top: 1rem;
  left: 1.5rem;
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => {
    return theme.colors.seventy;
  }};

  &:hover {
    color: black;
  }

  i {
    font-size: 3rem;
  }
  @media ${devices.laptop} {
    left: 0rem;
    top: 0rem;
    bottom: 1rem;
    right: 1rem;
  }
`;

export const GameInfoSection = styled(Section)`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 2rem;
  background-color: green;
  border-radius: 0px;
  padding: 0px;
`;
export const GameSamplesSection = styled.section``;

export const GameSamplesSectionImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GameInfoWrapper = styled.div`
  border-top-left-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.eighty};
  width: 100%;
  padding-right: 10%;
  padding-left: 10%;
  @media ${devices.laptop} {
    border-top-left-radius: 15rem;
    display: flex;
    flex-direction: column;

    & > h3 {
      text-align: center;
    }
  }
`;

export const GameInfoSectionArticles = styled.div`
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: visible;
`;

export const ActivityListSection = styled(Section)`
  height: auto;
`;

export const AboutAsSection = styled(Section)`
  height: auto;
`;

export const RoundFooterWrapper = styled.div`
  @media ${devices.laptop} {
    display: none;
  }
`;

export const WelcomeRowWrapper = styled.div`
  position: relative;

  @media ${devices.laptop} {
    display: flex;
  }
`;