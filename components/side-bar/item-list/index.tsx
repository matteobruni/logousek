import React from 'react'
import Item from './item'
import { ItemType } from './item'
import * as S from "./styled"

type SidebarItemListProps = { itemList: ItemType[], setIsMenuShow: (value: boolean) => void }

const SidebarItemList: React.FC<SidebarItemListProps> = ({ itemList }) => {
  const arrayItemList = Array.isArray(itemList) ? itemList : []
  return (
    <S.List>
      {arrayItemList.map((item) => (
        <Item
          key={`sidebar-item-${item.name}`}
          onClick={item.onClick}
          icon={item.icon}
          title={item.title}
          name={item.name}
        />
      ))}
    </S.List>
  )
}

export default SidebarItemList
