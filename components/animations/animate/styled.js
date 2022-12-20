import styled from 'styled-components'

export const AnimateWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* display: block; */
  opacity: ${({ opacity }) => opacity};
  translate: ${({ translate }) => translate};
  transform: scale(${({ scale }) => scale});
  transition: 900ms linear;
`
