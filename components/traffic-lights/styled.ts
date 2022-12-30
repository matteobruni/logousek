import styled, { keyframes } from 'styled-components'

export const TrafficContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

type LightProps ={isActive: boolean}

export const Light = styled.div<LightProps>`
  width: 1.5rem;
  aspect-ratio: 1 / 1;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  overflow: visible;
  transition-duration: 1s;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
`
export const LightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 2.7rem;
  aspect-ratio: 1 / 1;
`
const pulsate = keyframes`
    0% {transform: scale(1); opacity: 0.0;}
    50% {opacity:1;}
    100% {transform: scale(1.5, 1.5); opacity: 0.0;}
`

export const Lighting = styled.div`
  position: absolute;
  border: 0.25rem solid ${({ color }) => color};
  border-radius: 50%;
  height: 1.8rem;
  aspect-ratio: 1 / 1;
  animation: ${pulsate} 1.2s linear;
  animation-iteration-count: infinite;
  opacity: 0;
`
