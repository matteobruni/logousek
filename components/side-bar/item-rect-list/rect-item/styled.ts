import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  margin-right: 2rem;
  transition-duration: 0.5s;
  border-radius: ${({ theme }) => theme.radius.primary};
  cursor: pointer;

  &:hover {
    box-shadow: 0 3rem 5rem rgb(0 0 0 / 8%);
    background-color: ${({ theme }) => theme.colors.white};
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
  border-radius: ${({ theme }) => theme.radius.primary};
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
