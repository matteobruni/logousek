import styled from "styled-components";
import { devices } from '@constants/screens-conf'
import { Section } from "../styled"

export const AboutAsSectionWrapper = styled(Section)`
  height: auto;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const AboutAsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom-left-radius: ${({ theme }) => theme.radius.tertialy};
  background-color: ${({ theme }) => theme.colors.white};

  @media ${devices.laptop} {
  border-bottom-left-radius: ${({ theme }) => theme.radius.quaternary};
  }
`