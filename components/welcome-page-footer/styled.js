import styled from "styled-components";
import { devices } from "../../constants/screens-conf";

export const WelcomePageFooterWrapper = styled.footer`
  width: 100%;
  padding-bottom: 5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h2 {
    margin-top: 1rem;
    padding-bottom: 0.5rem;
  }

  & > p {
    color: ${({ theme }) => theme.colors.white};
  }

  @media ${devices.laptop} {
    padding-bottom: 0rem;
  }
`;

export const ClickableIconContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 10rem;
`;
