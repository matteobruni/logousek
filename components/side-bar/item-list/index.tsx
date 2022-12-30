import React from 'react'
import { useRouter } from 'next/router'
import Item from './item'
import { ItemType } from './item'
import { UrlObject } from 'url'
import * as S from "./styled"

type SidebarItemListProps = { itemList: ItemType[], setIsMenuShow: (value: boolean) => void }

const SidebarItemList: React.FC<SidebarItemListProps> = ({ itemList, setIsMenuShow }) => {
  const router = useRouter()
  const arrayItemList = Array.isArray(itemList) ? itemList : []
  const redirect = (link: string | UrlObject) => {
    setIsMenuShow(false)
    router.push(link)
  }
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
