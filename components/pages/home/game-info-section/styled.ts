import styled from "styled-components";
import { Section } from "../styled"
import { devices } from '@constants/screens-conf'

export const GameInfoSection = styled(Section)`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 2rem;
  background-color: green;
  border-radius: 0;
  padding: 0px;
`
export const GameInfoWrapper = styled.div`
  border-top-left-radius: ${({ theme }) => theme.radius.tertialy};
  background-color: ${({ theme }) => theme.colors.eighty};
  width: 100%;
  padding-right: 10%;
  padding-left: 10%;
  @media ${devices.laptop} {
    border-top-left-radius: ${({ theme }) => theme.radius.quaternary};
    display: flex;
    flex-direction: column;

    & > h3 {
      text-align: center;
    }
  }
`

export const GameInfoSectionArticles = styled.div`
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: visible;
`