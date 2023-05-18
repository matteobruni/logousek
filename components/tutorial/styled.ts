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
  transition-duration: 1s;
  width: auto;
  height: auto;

  ${({ isTutorialOpened }) => isTutorialOpened ? css`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  ` : null}
`;

export const TutorialContainer = styled.div<TutorialWrapperProps>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.transparent};
  transition-duration: 1s;

  ${({ isTutorialOpened }) => isTutorialOpened ? css`
    background-color: ${({ theme }) => theme.colors.wtiteTransparent};
    border-radius: ${({ theme }) => theme.radius.secondary};
    ` : null}
`;

export const LogosekWrapper = styled.div<LogosekWrapperProps>`
  cursor: pointer;
  height: 160px;
  width: 160px;
  
  @media ${devices.tablet} {
    height: 280px;
    width: 280px;
  }

  ${({ isTutorialOpened }) => isTutorialOpened ? css`
      height: 280px;
      width: 280px;
      transition-duration: 1s;

      @media ${devices.tablet} {
        height: 360px;
        width: 360px;
      }
  ` : null}
`

export const BubbleWrapper = styled.div`
  position: absolute;
  top: 104px;
  left: 280px;

  article > div > p {
  /* width: 300px; */
  overflow: hidden;
  border-right: 2px solid transparent;
  padding-right: 2px;
  margin: 0 auto;
  animation: 
    typing 4s steps(40, end),
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