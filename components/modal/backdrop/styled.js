import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: ${({ show }) => (show ? "fixed" : "static")};
  width: 100vw;
  height: 100vh;
  z-index: 1001;
  background-color: rgb(0 0 0 / 54%);
  filter: ${({ show }) => (show ? "blur(0.4rem)" : "none")};
`;
