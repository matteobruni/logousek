import styled from 'styled-components'
import { devices } from 'constants/screens-conf'

export const WelcomeRowWrapper = styled.div`
  position: relative;

  @media ${devices.laptop} {
    display: flex;
  }
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.eighty};
  z-index: 2;
  flex: 1;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`