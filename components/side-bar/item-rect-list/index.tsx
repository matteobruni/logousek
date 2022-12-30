import React from 'react'
import SidebarItem from './rect-item/index'
import { SidebarRectItemProps } from './rect-item/index'
import * as S from "./styled"

type SidebarItemRectListProps = { itemList: SidebarRectItemProps[] }

const SidebarItemRectList: React.FC<SidebarItemRectListProps> = ({ itemList }) => {
  const arrayItemList = Array.isArray(itemList) ? itemList : []
  return (
    <S.List>
      {arrayItemList.map((item) => (
        <SidebarItem
          key={`side-bar-rect-item-${item.name}`}
          icon={item.icon}
          title={item.title}
          name={item.name}
        />
      ))}
    </S.List>
  )
}

export default SidebarItemRectList
