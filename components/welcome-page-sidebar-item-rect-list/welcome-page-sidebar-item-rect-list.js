import React from 'react';
import WelcomePageSidebarItem from '../welcome-page-sidebar-rect-item/welcome-page-sidebar-rect-item';
import styles from "./styles.module.css";

function WelcomePageNavItemRectList({itemList}) {
  const arrayItemList = Array.isArray(itemList) ? itemList : [];
  return (
    <ul className={styles.welcomePageNavList}>
      {arrayItemList.map(item => <WelcomePageSidebarItem key={`welcome-page-sidebar-item-${item.name}`} icon={item.icon} title={item.title} name={item.name}/>)}
    </ul>
  )
}

export default WelcomePageNavItemRectList;