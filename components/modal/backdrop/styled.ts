import styled from 'styled-components'

interface StyledBackdrop {
  show: boolean
}

export const StyledBackdrop = styled.div<StyledBackdrop>`
  position: ${({ show }) => (show ? 'fixed' : 'static')};
  width: 100vw;
  z-index: 1001;
  background-color: rgb(0 0 0 / 54%);
  filter: ${({ show }) => (show ? 'blur(0.4rem)' : 'none')};
`
