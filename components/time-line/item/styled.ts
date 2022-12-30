import styled, { css } from "styled-components";
import { devices } from "constants/screens-conf";

type TimeLineItemWrapperProps = { isEven: boolean };
type BeakProps = { isEven: boolean };

export const TimeLineItemWrapper = styled.article<TimeLineItemWrapperProps>`
  display: flex;
  margin: 1rem;
  ${({ isEven }) =>
    isEven
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `}
  @media ${devices.laptop} {
    margin: 0rem;
  }
`;

export const Container = styled.article`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  width: 100%;
  padding: 1rem;

  @media ${devices.laptop} {
    width: calc(50% - 40px);
  }
`;

export const Beak = styled.div<BeakProps>`
  @media ${devices.laptop} {
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    background-color: rgb(132, 224, 101);
    top: 2rem;
    transform: rotate(45deg);
    ${({ isEven }) =>
    isEven
      ? css`
            left: -0.75rem;
          `
      : css`
            right: -0.75rem;
          `}
  }
`;

export const Content = styled.div``;

export const Date = styled.span`
  color: #8a8c89;
  font-size: 0.9rem;
`;

export const Desc = styled.p`
  color: white;
  margin: 0.3rem;
  font-weight: 600;
  font-size: 1.2rem;
`;
