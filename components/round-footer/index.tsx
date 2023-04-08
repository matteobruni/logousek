import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import * as S from "./styled"

type ActivityType = {
  name: string,
  clickable: boolean,
  title?: React.ReactElement | string,
  disabled?: boolean,
  color?: string,
  background?: string,
  onClick?: () => void
  icon?: string
  shortTitle?: string
}

type RoundFooterType = {
  activityTypes: ActivityType[],
  activeActivityName?: string,
  selectNewActivity?: (name: string) => void,
  children?: React.ReactElement
  customHeight?: string
}

const RoundFooter: React.FC<RoundFooterType> = ({
  activityTypes = [],
  activeActivityName,
  selectNewActivity,
  children,
  customHeight
}) => {
  const themeContext = useContext(ThemeContext)
  const activityTypesButtons = activityTypes.map((activityType) => {
    const isActiveActivity = activityType.name === activeActivityName
    let customStyles = {}

    if (activityType.disabled) {
      customStyles = { color: '#aaa', cursor: 'default' }
    } else if (activityType.clickable === false) {
      customStyles = { cursor: 'default' }
    } else if (isActiveActivity) {
      customStyles = { color: activityType?.color ? themeContext?.colors.primary : themeContext?.colors?.primary }
    }
    const _selectNewActivity = () => typeof selectNewActivity === "function" ? selectNewActivity(activityType.name) : undefined
    const onClick =
      activityType.disabled || activityType.clickable === false
        ? undefined
        : activityType.onClick || _selectNewActivity
    return (
      <S.NavLink
        key={`activityTypeButton-${activityType.name}`}
        onClick={onClick}
        style={customStyles}
        background={activityType.background}
      >
        <S.NavIcon className={`material-icons`}>
          {activityType.icon}
        </S.NavIcon>
        <span>
          {activityType.shortTitle || activityType.title}
        </span>
      </S.NavLink>
    )
  })
  return (
    <footer>
      <S.NavbarWrapper
        initial="initialState"
        animate="animateState"
        transition={{
          duration: 1.4
        }}
        variants={{
          initialState: {
            y: 100
          },
          animateState: {
            y: 0
          }
        }}
      >
        <S.Nav customHeight={customHeight}>{children || activityTypesButtons}</S.Nav>
      </S.NavbarWrapper>
    </footer>
  )
}

export default RoundFooter
