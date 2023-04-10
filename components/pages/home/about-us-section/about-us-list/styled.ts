import styled from 'styled-components'
import { devices } from 'constants/screens-conf'

export const AboutUsListWrapper = styled.div`
  width: 80%;
  max-width: 960px;
  margin-right: 10%;
  margin-left: 10%;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-column-gap: 24px;


  @media ${devices.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${devices.laptop} {
    grid-column-gap: 64px;
  }
`
