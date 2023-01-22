import styled from 'styled-components'

interface StyledIconProps {
  fontSize?: string
}

export const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 0px 5px;
    cursor: pointer;
    user-select: none;

    &:hover{
        transition: all .2s ease-in-out;
        transform: scale(1.2);
    }
`

export const StyledIcon = styled.i<StyledIconProps>`
  font-size: ${({ fontSize }) => fontSize}
`
