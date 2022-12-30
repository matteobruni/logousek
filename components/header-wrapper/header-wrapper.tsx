import React from 'react'
import styles from './styles.module.css'
import * as S from "./styled"

type HeaderWrapperProps = {
  children: React.ReactElement | string;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  return (
    <S.HeaderWrapper>
      {children}
    </S.HeaderWrapper>
  )
}

export default HeaderWrapper
