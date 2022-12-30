import React from 'react'
import styles from './styles.module.css'
import * as S from "./styled"

type ClickableIconWrapperProps = {
  children: React.ReactElement | string
}

const ClickableIconWrapper: React.FC<ClickableIconWrapperProps> = ({ children }) => {
  return (
    <S.IconWrapper key="game-menu-icons">
        {children}
    </S.IconWrapper>
  )
}

export default ClickableIconWrapper
