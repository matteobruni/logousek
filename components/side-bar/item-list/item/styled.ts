import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  margin-right: 2rem;
  transition-duration: 0.5s;
  border-radius: ${({ theme }) => theme.radius.primary};
  cursor: pointer;

  &:hover {
    box-shadow: 0 3rem 5rem rgb(0 0 0 / 8%);
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ListItemLink = styled.a`
  display: flex;
  width: 100%;

  & > span {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ListItemIcon = styled.i`
   font-size: 2.5rem;
   padding: 0.75rem;
   color: ${({ theme }) => theme.colors.black}
`;
