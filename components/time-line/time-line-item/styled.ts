import styled, { css } from "styled-components";
import { devices } from "constants/screens-conf";

type TimeLineItemWrapperProps = { isEven: boolean };
type BeakProps = { isEven: boolean };

export const TimeLineItemWrapper = styled.div<TimeLineItemWrapperProps>`
  display: flex;
  margin: 16px 0;
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
  border-radius: ${({ theme }) => theme.radius.primary};
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
    background-color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 0.3rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;
