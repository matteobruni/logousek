import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  height: 100vh;
`

export const Link = styled.span`
  cursor: pointer;
  color: red;
`

export const LoginButtonsWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 1rem;
  }
`

export const Footer = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;

  & > span {
  padding: 0.5rem 0.3rem;
}
`