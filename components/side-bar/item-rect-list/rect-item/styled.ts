import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  margin-right: 2rem;
  transition-duration: 0.5s;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3rem 5rem rgb(0 0 0 / 8%);
    background-color: white;
  }
`;

export const ListItemDesc = styled.p`
  margin: 0px;
  text-align: center;
  padding: 0.5rem;
`;

export const Picture = styled.div`
  height: 5rem;
  width: 100%;
  border-radius: 0.5rem;
  background-color: grey;
`;
