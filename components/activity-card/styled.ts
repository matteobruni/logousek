import styled, { css } from 'styled-components'
import { ActivityCardType } from '.'

export const ActivityCardList = styled.div<ActivityCardType>`
  border-radius: ${({ customRadius }) => customRadius};
  background-color: ${({ color, theme }) => {
    return color || theme.colors.white
  }};
  cursor: pointer;
  border: ${({ theme, selected }) =>
    selected ? `0.4rem solid ${theme.colors.blue}` : '0rem'};
  transition-duration: 0.3s;
  overflow: hidden;

  ${({ fill, customAspectRatio }) =>
    fill
      ? css`
          height: 100%;
          width: 100%;
        `
      : css`
          aspect-ratio: ${customAspectRatio};
          height: fit-content;
          width: 10rem;
        `}

  &>svg {
    transform: rotate(${({ rotate }) => rotate}deg);
  }

  & > i {
    position: absolute;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    animation: pump 0.5s forwards;

    @keyframes pump {
      from {
        opacity: 0;
        transform: translateY(-0.5rem) translateX(-1.5rem) scale(0);
      }
      to {
        opacity: 1;
        transform: translateY(0rem) translateX(0rem) scale(1);
      }
    }
  }
`
