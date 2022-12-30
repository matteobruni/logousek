import styled, { css } from 'styled-components'

export const BlobContainer = styled.div`
  position: relative;
`

export const Figure = styled.div`
position: absolute;
top: 0px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

& > svg {
  width: 6rem;
  height: 6rem;
}
`
