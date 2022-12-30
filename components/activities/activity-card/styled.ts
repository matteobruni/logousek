import styled from 'styled-components'

interface ActivityCardWrapperProps {
  children?: any
  onClick?: () => void
  selected?: boolean
  rotate?: number
  color?: string
  customRadius?: string
  customAspectRatio?: string
}

export const ActivityCardWrapper = styled.div<ActivityCardWrapperProps>`
  width: 10rem;
  border-radius: ${({ customRadius }) => customRadius || '1rem'};
  height: fit-content;
  background-color: ${({ color, theme }) => {
    return color || theme.colors.white
  }};
  aspect-ratio: ${({ customAspectRatio }) => customAspectRatio || '1 / 1'};
  cursor: pointer;
  border: ${({ selected }) => selected ? '0.4rem' : '0rem'} solid blue;
  transition-duration: 0.3s;
  overflow: hidden;

  &>svg {
    transform: rotate(${({ rotate }) => rotate}deg);
  }

  &>i {
    position: absolute;
    box-sizing: border-box;
    background-color: blue;
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    animation: pump 0.5s forwards;

    @keyframes pump {
    from {
      opacity: 0;
      transform: translateX(-1.5rem);
      transform: translateY(-0.5rem);
    }
    to {
      opacity: 1;
      transform: translateX(0rem);
      transform: translateY(0rem);
    }
  }
}
`
