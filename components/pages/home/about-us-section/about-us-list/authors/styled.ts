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
  margin-bottom: 2rem;
  width: 100%;
  align-self: center;
  justify-self: center;
`;

export const PictureWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Picture = styled.div`
  width: 100%;
  aspect-ratio: 1;
  height: auto;
  border-radius: ${({ theme }) => theme.radius.tertialy};
  background-color: grey;
`;

export const Authorinfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 0 0 0;
  & > p {
    padding: 0px;
    margin: 0px;
    text-align: center;
  }

  & > h4 {
    margin: 0px;
    text-align: center;
  }
`;

export const LabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
