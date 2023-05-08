import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ColorsEnum } from 'styles/colors'

import * as S from "./styled"

type ActivityType = {
  name: string,
  clickable: boolean,
  title?: React.ReactElement | string,
  disabled?: boolean,
  color?: ColorsEnum,
  background?: string,
  onClick?: () => void
  icon?: string
  shortTitle?: string
}

type RoundFooterType = {
  activityTypes: ActivityType[],
  activeActivityName?: string,
  selectNewActivity?: (name: string, index: number) => void,
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
  const activityTypesButtons = activityTypes.map((activityType, index) => {
    const isActiveActivity = activityType.name === activeActivityName

    const getCustomStyles = () => {
      if (activityType.disabled) {
        return { color: themeContext?.colors[ColorsEnum.lightGrey], cursor: 'default' }
      } else if (activityType.clickable === false) {
        return { cursor: 'default' }
      } else if (isActiveActivity) {
        return { color: activityType?.color ? themeContext?.colors[activityType?.color] : themeContext?.colors?.primary }
      }
    }

    const onLinkClickHandler = () => {
      if (typeof activityType.onClick === "function") {
        activityType.onClick()
      }
      else if (!activityType.disabled || activityType.clickable === true) {
        typeof selectNewActivity === "function" ? selectNewActivity(activityType.name, index) : undefined
      }
    }

    return (
      <S.NavLink
        key={`activityTypeButton-${activityType.name}`}
        onClick={onLinkClickHandler}
        style={getCustomStyles()}
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
