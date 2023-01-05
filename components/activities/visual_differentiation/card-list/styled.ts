import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1.2rem;
  max-width: 100vw;

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`
