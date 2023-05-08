import styled from 'styled-components'
import { devices } from 'constants/screens-conf'

export const FooterWrapper = styled.footer`
  width: 100%;
  padding-bottom: 5rem;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${({ theme }) => theme.radius.tertialy};

  & > h2 {
    margin-top: 1rem;
    padding-bottom: 0.5rem;
  }

  & > p {
    color: ${({ theme }) => theme.colors.white};
  }

  @media ${devices.laptop} {
    border-top-right-radius: ${({ theme }) => theme.radius.quaternary};
    padding-bottom: 0rem;
  }
`

export const ClickableIconContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 10rem;
`
