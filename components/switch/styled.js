import styled from "styled-components";

export const SwitchWrapper = styled.div`
 position: relative;
 width: 3.5rem;
 cursor: pointer;
`;

export const SwitchPointer = styled.div`
  height: 1.4rem;
  width: 1.4rem;
  border-radius: 0.7rem;
  background-color: white;
  position: absolute;
  top: 0.2rem;
  left: ${({enabled}) => enabled ? "1.8rem" : "0.2rem"};
  transition-duration: 0.5s;
`;

export const SwitchBackground = styled.div`
  height: 1.8rem;
  border-radius: 1.75rem;
  background: black;
`;
