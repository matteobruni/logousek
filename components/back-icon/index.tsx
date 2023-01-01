import React from 'react'
import { StyledBackIconWrapper, StyledBackIcon } from './styled'

type BackIconProps = { onClick: () => void }

const BackIcon: React.FC<BackIconProps> = ({ onClick }) => {
  return (
    <StyledBackIconWrapper onClick={onClick}>
      <StyledBackIcon className={'material-icons'}>close</StyledBackIcon>
    </StyledBackIconWrapper>
  )
}

export default BackIcon;