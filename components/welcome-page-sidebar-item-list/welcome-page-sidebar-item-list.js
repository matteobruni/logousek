import React from 'react';
import WelcomePageSidebarItem from '../welcome-page-sidebar-item/welcome-page-sidebar-item';
import styles from "./styles.module.css";

function WelcomePageNavItemList({itemList}) {
  const arrayItemList = Array.isArray(itemList) ? itemList : [];
  return (
    <ul className={styles.welcomePageNavList}>
      {arrayItemList.map(item => <WelcomePageSidebarItem key={`welcome-page-sidebar-item-${item.name}`} onClick={item.onClick} icon={item.icon} title={item.title} name={item.name}/>)}
    </ul>
  )
}

export default WelcomePageNavItemList;