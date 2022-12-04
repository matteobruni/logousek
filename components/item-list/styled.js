import styled from "styled-components";

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;

export const StyledListItem = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 4rem 1fr 4rem;
  height: 3rem;
  font-size: 1.2rem;
  cursor: pointer;
  user-select: none;
  margin: 0.5rem;
  border-radius: 0.3rem;
  transition: 0.7s;
  background-color: ${({theme}) => theme.colors.primary};
  color: white;

  &>span{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover{
    transform: scale(1.05);
  }
`;
