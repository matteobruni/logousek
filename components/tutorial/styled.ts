import styled, { css } from "styled-components";
import { zIndex } from "styles";

import { devices } from "@constants/screens-conf";

type TutorialWrapperProps = { isTutorialOpened: boolean }
type LogosekWrapperProps = { isTutorialOpened: boolean }

export const TutorialWrapper = styled.div<TutorialWrapperProps>`
  position: fixed;
  z-index: ${zIndex.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  left: 0px;
  width: 160px;
  height: 160px;

  ${({ isTutorialOpened }) => isTutorialOpened ? css`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  ` : css`
    left: 0%;
    bottom: 0%;

    transform: translate(-0%, -0%);
    `}

  & > div {
    transition-duration: 1s;
    width: ${({ isTutorialOpened }) => isTutorialOpened ? "344px" : "auto"};

    @media ${devices.laptop} {
      width: ${({ isTutorialOpened }) => isTutorialOpened ? "440px" : "auto"};
    }
  }

  
  @media ${devices.laptop} {
    transition-duration: 1s;
    width: 280px;
    height: 280px;
  }
`;

export const BlobContainer = styled.div<TutorialWrapperProps>`
  position: relative;

  display: flex;
  flex-direction: column;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const LogosekWrapper = styled.div<LogosekWrapperProps>`
  cursor: pointer;
  height: 160px;
  width: 160px;
  
  @media ${devices.laptop} {
    height: 280px;
    width: 280px;
  }

  ${({ isTutorialOpened }) => isTutorialOpened ? css`
      height: 280px;
      width: 280px;
      transition-duration: 1s;

      @media ${devices.laptop} {
        height: 360px;
        width: 360px;
      }
  ` : null}
`

export const BubbleWrapper = styled.div`
  position: relative;

  @media ${devices.laptop} {
    position: absolute;
    top: 147px;
    left: 320px;
  }

  article > div > p {
  overflow: hidden;
  border-right: 2px solid transparent;
  padding-right: 2px;
  margin: 0 auto;
  animation: 
    typing 4s steps(21, end),
    blink-caret 0.8s step-end 5;
  }

  @keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% {  border-color: ${({ theme }) => theme.colors.red}; }
}
`

export const ButtonRow = styled.div`
  display: flex;
  margin: 8px;
  gap: 8px;
`

export const TutorialContainer = styled.div`
  position: relative;
`