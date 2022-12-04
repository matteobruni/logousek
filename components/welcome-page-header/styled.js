import styled from "styled-components";

export const WelcomePageHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const WelcomePageHeaderContainer = styled.div`
  width: fit-content;
  margin: 2rem 0rem;
`;

export const WelcomePageHeaderText = styled.h2`
  font-size: 1.5rem;
  margin: 0px;
  margin-bottom: 0.6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.sixty};
`;

export const UnderlineBlock = styled.div`
  width: 80%;
  margin-left: 10%;
  height: 0.3rem;
  background-color: ${({ theme }) => theme.colors.sixty};
`;
