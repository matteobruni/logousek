import React from 'react'
import * as S from './styled'

export type ClickableIconProps = { onClick: () => void, icon: string, fontSize?: string, id?: string }

const ClickableIcon: React.FC<ClickableIconProps> = ({ onClick, icon, fontSize, id }) => {
  return (
    <S.Link onClick={typeof onClick === 'function' ? onClick : undefined} >
      <S.StyledIcon fontSize={fontSize} className={'material-icons'} id={id}>{icon}</S.StyledIcon>
    </S.Link>
  )
}

export default ClickableIcon
