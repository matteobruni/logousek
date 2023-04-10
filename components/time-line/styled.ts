import styled from "styled-components";
import { devices } from "constants/screens-conf";

export const Wrapper = styled.div`
  max-width: 960px;
  position: relative;
  color: white;
  margin: 0.3rem;
  font-weight: 600;
  font-size: 1.2rem;
  width: 90%;
  margin-left: 5%;

  @media ${devices.mobileL} {
    width: 80%;
    margin-left: 10%;
  }

  @media ${devices.laptop} {
    width: 90%;
    margin: 0px 5%;
  }
`;

export const CenterLine = styled.div`
  position: absolute;
  top: 5%;
  bottom: 5%;
  display: none;
  height: 90%;
  width: 5px;
  left: 50%;
  background: rgb(138, 140, 137);

  @media ${devices.laptop} {
    display: block;
  }
`;