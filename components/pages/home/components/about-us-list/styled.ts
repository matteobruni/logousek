import styled from 'styled-components'

export const WelcomePageAboutus = styled.div`
    width: 80%;
    margin-right: 10%;
    margin-left: 10%;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-column-gap: 5rem;

  @media only screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`
