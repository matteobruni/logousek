import styled from "styled-components";
import { Section } from "../styled"
import { devices } from '@constants/screens-conf'

export const IntroSection = styled(Section)`
  background: ${({ theme }) =>
    `linear-gradient(to left bottom,${theme.colors.lightGrey}, ${theme.colors.fourty})`};

  border-bottom-right-radius: ${({ theme }) => theme.radius.tertialy};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  @media ${devices.laptop} {
    border-bottom-right-radius: ${({ theme }) => theme.radius.quaternary};
  }
`
export const IntroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  border-bottom-right-radius: ${({ theme }) => theme.radius.secondary};
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
`

export const DescriptionWrapper = styled.div`
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
`

export const Description = styled.div`
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
`


export const Hill = styled.div`
  position: absolute;
  transition-duration: 0.2s;
  bottom: 0px;
  width: 150vw;
  left: 0vw;
  height: 40vh;
  background: ${({ theme }) => theme.colors.darkGreen};
  border-top-right-radius: 100%;
  @media ${devices.laptop} {
    width: 100vw;
  }
`

export const LogousekWrapper = styled.div`
  & > svg {
    width: 400px;
  }
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  height: 400px;
  position: absolute;
  bottom: 0px;
`

export const FirstForegroundTreeWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  transition-duration: 0.2s;
  left: -400px;
  z-index: 2;
  @media ${devices.laptop} {
    left: 20px;
  }
`

export const SecondForegroundTreeWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  transition-duration: 0.2s;
  right: -400px;
  z-index: 5;
  @media ${devices.laptop} {
    right: 20px;
  }
`

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
    return theme.colors.seventy
  }};

  &:hover {
    color: black;
  }

  i {
    font-size: 3rem;
  }

  @media ${devices.laptop} {
    left: auto;
    top: auto;
    bottom: 1rem;
    right: 1rem;
  }
`