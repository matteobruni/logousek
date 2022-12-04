import styled from "styled-components";

export const Button = styled.button`
  background: ${({ bgColor }) => bgColor || "white"};
  color: ${({ color }) => color || "black"};
  padding: 0.3rem  0.6rem;
  border-radius: 0.3rem;
  border: 0px;
  cursor: pointer;
`;
