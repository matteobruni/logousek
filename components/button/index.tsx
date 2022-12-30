import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import * as S from './styled'

export enum ButtonSizesEnum {
  xs = 'xs',
  s = 's',
}

interface ButtonProps {
  children?: string
  title?: string
  onClick: () => void
  size?: ButtonSizesEnum
  disabled?: boolean
  color?: string
  backgroundColor?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  title,
  onClick,
  size,
  disabled,
  color,
  backgroundColor
}) => {
  const themeContext = useContext(ThemeContext)
  const colors = themeContext.colors || {}
  return (
    <S.ButtonRowWrapper
      color={color || colors.seventy}
      backgroundColor={
        disabled
          ? colors.lightGrey
          : backgroundColor || colors.white
      }
      disabled={disabled}
      size={size}
      onClick={onClick}
    >
      {children || title}
    </S.ButtonRowWrapper>
  )
}
export default Button
