import styled from "styled-components";

export const AuthorWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0px;
  width: 100%;
  max-width: 30rem;
  align-self: center;
  justify-self: center;
`;

export const PictureWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Picture = styled.div`
  width: 15rem;
  min-width: 15rem;
  height: 15rem;
  border-radius: 7.5rem;
  background-color: grey;
`;

export const Authorinfo = styled.div`
  padding: 2rem;
  & > p {
    padding: 0px;
    margin: 0px;
    padding-top: 0.3rem;
  }

  & > h4 {
    margin: 0px;
    margin-bottom: 1rem;
  }
`;

export const LabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
