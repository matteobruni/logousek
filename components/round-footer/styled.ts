import styled from "styled-components";
import { motion } from "framer-motion";

type NavProps = { customHeight?: string }

export const NavbarWrapper = styled(motion.div)`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  z-index: 999;
`;

export const Nav = styled.nav<NavProps>`
  display: flex;
  height: 4rem;
  width: ${({ customHeight }) => customHeight || "100%"};
  box-shadow: 0px 5px 40px 0px rgb(58, 58, 58);
  max-width: 720px;
  margin: 0px 10px;
  position: relative;
  background-color: #ffffff;
  border-radius: 30px;
`;


export const NavLink = styled.a`
  min-width: 60px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  font-size: 11pt;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  color: #444444;
  text-decoration: none;
  transition: background-color 0.7s ease-in-out;
  user-select: none;

&:hover {
  background: #eeeeee;
}

&:last-child {
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
}

&:first-child {
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
}

`;


export const NavIcon = styled.i`
 font-size: 18px;
`;