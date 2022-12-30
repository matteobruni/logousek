import styled from 'styled-components'

export const StyledBackIconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.5s;
  cursor: pointer;

  &:hover {
    color: red;
    transform: scale(1.1) rotate(90deg);
  }
`

export const StyledBackIcon = styled.i`
  font-size: 28pt;
`
