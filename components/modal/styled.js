import styled from "styled-components";
import { devices } from "../../constants/screens-conf";

export const ModalWrapper = styled.div`
  position: absolute;
  display: flex;
  z-index: 1002;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  width: 100vw;
  height: 100vh;
  transform: scale(0);
  opacity: 0;
  animation: ${({ show }) =>
      show ? "popup" : show === undefined ? "none" : "dump"}
    1s forwards;
  @keyframes popup {
    from {
      transform: scale(0);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes dump {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      display: none;
      transform: scale(0);
      opacity: 0;
    }
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 100vw;
  background-color: white;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.4);
  border-radius: 1rem;

  @media ${devices.tablet} {
    width: 70vw;
  }

  @media ${devices.laptop} {
    width: 60vw;
  }

  @media ${devices.laptopL} {
    width: 50vw;
  }

  @media ${devices.desktop} {
    width: 40vw;
  }

  @media ${devices.desktopL} {
    width: 25vw;
  }
`;

export const Modalheader = styled.div`
  display: flex;
  padding: 0.3rem;
  background: #ccc;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  & > h3 {
    margin: 0px;
    text-align: center;
    flex: 1;
    padding: 0.5rem;
  }
`;

export const ModalContent = styled.div`
  padding: 0.5rem 2rem;
  flex: 1;
`;
