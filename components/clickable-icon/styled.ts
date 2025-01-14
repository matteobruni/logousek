import styled from 'styled-components'

interface StyledIconProps {
  fontSize?: string
  color?: string
}

export const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 0px 5px;
    cursor: pointer;
    user-select: none;


`

export const StyledIcon = styled.i<StyledIconProps>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme, color }) => color || theme.colors.black}
`
