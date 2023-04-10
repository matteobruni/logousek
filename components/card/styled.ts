import styled from "styled-components";

interface InnedCardProps {
  isDiffSiteShown: boolean;
}

export const CardWrapper = styled.article`
  background-color: transparent;
  width: 12rem;
  height: 15rem;
  perspective: 1000px;
  margin: 1.5rem;

  @media only screen and (max-width: 1280px) {
    margin: 0.7rem;
  }

  @media only screen and (max-width: 720px) {
    margin: 0.7rem;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

export const InnedCard = styled.div<InnedCardProps>`
  position: relative;
  width: 100%;
  height: 15rem;
  border-radius: ${({ theme }) => theme.radius.primary};
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isDiffSiteShown }) =>
    isDiffSiteShown ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const MainSide = styled.div`
  cursor: pointer;
  display: flex;
  height: 100%;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.2);
  flex-direction: column;
  position: absolute;
  border-radius: ${({ theme }) => theme.radius.primary};
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
  color: black;

  img {
    border-top-left-radius: ${({ theme }) => theme.radius.primary};
    border-top-right-radius: ${({ theme }) => theme.radius.primary};
  }
`;

export const DifficultySide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.primary};
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.2);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #fff;
  color: white;
  transform: rotateY(180deg);
`;

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Description = styled.p`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0.5rem;
  font-weight: 600;
  text-align: center;
  color: #444444;
`;

export const InformIcon = styled.div`
  cursor: help;
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  z-index: 1;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.secondary};
  color: #444444;

  &:hover {
    color: white;
    transition: all 1s linear;
    background: #444444;
  }

  & > i {
    position: relative;
    width: 24px;
  }
`;
