import React from 'react'
import * as S from "./styled"

export type SidebarRectItemProps = { name: string, icon: string, title: string }

const SidebarRectItem: React.FC<SidebarRectItemProps> = ({ title }) => {
  return (
    <S.ListItem>
      <S.Picture />
      <S.ListItemDesc>{title}</S.ListItemDesc>
    </S.ListItem>
  )
}

export default SidebarRectItem
