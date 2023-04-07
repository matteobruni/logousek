import styled from "styled-components";
import { devices } from "constants/screens-conf";
import { hideScrollBarCss } from '../../../styles/css/scrollbar-styles'

export const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.8rem 2rem;
  padding-bottom: 100px;
  user-select: none;
  margin-top: 70px;

  @media ${devices.laptop} {
    padding: 0.8rem 6rem;
    flex-direction: row;
  }

  @media ${devices.laptopL} {
    padding: 0.8rem 8rem;
  }
`;

export const GameTypeDetail = styled.section`
  display: flex;
  max-height: 80vh;
  flex-direction: column;
  justify-content: center;
  flex: 2;
  margin: 2rem;

  @media ${devices.laptop} {
    max-height: auto;
    margin: 1rem;
  }
  @media ${devices.laptopL} {
    margin: 7rem;
  }
`;

export const GameList = styled.section`
  flex: 3;  
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 1.4rem;

  @media ${devices.laptopL} {
    gap: 0rem;
  }
`;

export const GamesTypeHeader = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: white;

  @media ${devices.laptop} {
    margin-bottom: 3rem;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
`;

export const GamesTypeContent = styled.p`
  color: white;
`;

export const CitationParagraph = styled.p`
  font-size: small;
  text-align: end;
`;

export const MenuWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0px;
  display: flex;
  flex-direction: column;
`;

export const BlobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  ${hideScrollBarCss}
  & > div > article > div {
    width: auto;
    flex: 1;
  }

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
  }
`

export const RightSideWrapper = styled.div`
  padding-bottom: 80px;
`
