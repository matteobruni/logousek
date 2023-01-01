import styled, { css } from 'styled-components'
import { ButtonSizesEnum } from '.'

interface ButtonRowWrapperProps {
  children?: string
  title?: string
  onClick: () => void
  size?: ButtonSizesEnum
  disabled?: boolean
  color?: string
  backgroundColor?: string
}

export const ButtonRowWrapper = styled.button<ButtonRowWrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    border: none;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
  }

  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        `
      case 's':
        return css`
          padding: 1rem 2rem;
          font-size: 1.2rem;
        `
      default:
        return css`
          padding: 1.5rem 4rem;
          font-size: 1.6rem;
        `
    }
  }}

  @keyframes pump {
    0% {
      scale: 0;
    }
    80% {
      scale: 1.15;
    }
    100% {
      scale: 1;
    }
  }

  ${({ disabled, backgroundColor }) =>
    disabled
      ? css`
          opacity: 0.7;
          cursor: default;
          background-color: ${backgroundColor};
        `
      : css`
          cursor: pointer;
          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
          }

          &:hover::after {
            opacity: 1;
            background-color: ${backgroundColor};
            animation: pump 0.5s forwards;
          }
          &:active,
          &:focus {
            transform: translateY(-1px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          }

          &::after {
            content: "";
            display: inline-block;
            height: 100%;
            width: 100%;
            border-radius: 10rem;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            transition: all 0.4s;
          }
        `}
`