import styled from 'styled-components'

interface LabelWrapperProps {
  background: string
}

export const LabelWrapper = styled.div<LabelWrapperProps>`
  padding: 0.3rem 0.7rem;
  margin: 0px 0.5rem;
  border-radius: 0.7rem;
  background: ${({ background }) => background}
`

export const LabelText = styled.p`
  font-size: 0.7rem;
  margin: 0px;
  color: white;
`
