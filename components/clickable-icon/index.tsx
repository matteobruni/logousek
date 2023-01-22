import React from 'react'
import * as S from './styled'

interface ClickableIconProps { onClick: () => void, icon: string, fontSize?: string }

const ClickableIcon: React.FC<ClickableIconProps> = ({ onClick, icon, fontSize }) => {
  return (
    <S.Link onClick={typeof onClick === 'function' ? onClick : undefined}>
      <S.StyledIcon fontSize={fontSize} className={'material-icons'}>{icon}</S.StyledIcon>
    </S.Link>
  )
}

export default ClickableIcon
