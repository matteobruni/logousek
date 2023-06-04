import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Button, { ButtonSizesEnum, ButtonProps } from '@components/button'

import * as S from './styled'

type IconButtonProps = ButtonProps & {
  icon: string
  children?: string | React.ReactNode
}


const IconButton: React.FC<IconButtonProps> = ({ children, icon, ...remainingProps }) => {
  return (
    <Button {...remainingProps}>
      <S.ButtonContent>
        <i className={'material-icons'}>{icon}</i>
        <div>
          {children}
        </div>
      </S.ButtonContent>
    </Button>
  )
}
export default IconButton
